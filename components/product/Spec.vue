<template>
	<div
		class="flex gap-x-12 mb-3"
		v-for="(dimension, index) in orderSpec.spec_dimension"
		:key="dimension"
	>
		<p class="text-gray-500">
			{{ orderSpec.spec_title[index] }}
		</p>
		<ul class="flex-1 flex flex-wrap gap-2">
			<li
				v-for="spec in dimension === 1 ? orderSpec.spec_1 : orderSpec.spec_2"
				:key="spec"
			>
				<button
					@click="selectSpec(spec, index)"
					class="border-2 border-gray-300 rounded-md py-2 px-4 text-black text-sm font-medium"
					:class="{
						'bg-gray-100 cursor-default': noStock(spec),
						'!bg-blue-primary !text-white !border-blue-primary':
							chosenSpecNames[index] === spec,
					}"
				>
					{{ spec }}
				</button>
			</li>
		</ul>
	</div>
	<div class="flex gap-x-12 mb-3">
		<p class="text-gray-500">數量</p>
		<div class="border-2 border-gray-300 rounded-md overflow-hidden">
			<button
				@click="decreaseQuantity()"
				class="py-2 px-4 border-r-2 border-gray-300"
			>
				<font-awesome-icon :icon="['fas', 'minus']" />
			</button>
			<input
				v-model="quantity"
				type="number"
				id="quantity"
				class="w-20 text-center h-full"
			/>
			<button
				@click="increaseQuantity()"
				class="py-2 px-4 border-l-2 border-gray-300"
			>
				<font-awesome-icon :icon="['fas', 'plus']" />
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { getStockApi } from '~/api/product';
import { Spec, SpecInfo } from '@/types/product';

const modalStore = useModal();
const productStore = useProduct();
const cartStore = useCart();

const props = defineProps<{
	orderSpec: Spec;
}>();


const chosenSpecNames = ref<string[]>(['', '']);
const quantity = ref<number>(1);


onMounted(async () => {
	await nextTick();
	preSelectSpec();
});

//找出第一個有庫存的一階規格
const firstAvailableSpec1 = computed(() => {
	return props.orderSpec.spec_info.find((info) => info.stock_qty > 0);
});

//預選規格
const preSelectSpec = () => {
	if (!firstAvailableSpec1.value) {
		return;
	}

	chosenSpecNames.value[0] = firstAvailableSpec1.value.item_spec1;
	//取得第二規格
	if (props.orderSpec.spec_dimension === 2) {
		const firstAvailableSpec2 = props.orderSpec.spec_info.find((info) => {
			return info.item_spec1 === chosenSpecNames.value[0] && info.stock_qty > 0;
		});
		if (firstAvailableSpec2) {
			chosenSpecNames.value[1] = firstAvailableSpec2.item_spec2;
		}
	}
	getSpecInfo();
};

const selectSpec = (spec: string, index: number) => {
	if (noStock(spec)) {
		return;
	}
	chosenSpecNames.value[index] = spec;
	getSpecInfo();
};

//取得對應的規格資訊
const getSpecInfo = () => {
	const info = props.orderSpec.spec_info.find((info) => {
		return (
			info.item_spec1 === chosenSpecNames.value[0] &&
			info.item_spec2 === chosenSpecNames.value[1]
		);
	});


	if (info) {
		//把規格id紀錄在store
		productStore.setSpecId(info.item_id)
		updateStock(info.item_id);
	}
};

//取得庫存資訊
const updateStock = async (id: number) => {
	const data = await getStockApi({ item_id: id });
	productStore.getStock(data.result);
};

//沒有庫存
const noStock = (spec: string) => {
	if (props.orderSpec.spec_dimension === 1) {
		const matchedSpec = props.orderSpec.spec_info.find((info) => {
			return info.item_spec1 === spec;
		});
		if (matchedSpec) {
			return matchedSpec.stock_qty <= 0;
		}
	}
	return false;
};

const decreaseQuantity = () => {
	if (quantity.value > 1) {
		quantity.value--;
		cartStore.setQuantity(quantity.value)
	}
};
const increaseQuantity = () => {
	if (quantity.value < 10 && quantity.value < productStore.stock.specifiedQty) {
		quantity.value++;
		cartStore.setQuantity(quantity.value)
	} else {
		modalStore.openModal({
			title: '春天線上購提醒',
			type: 'alert',
			message: '已達此商品可購買的最大數量',
			icon: 'warning',
		});
	}
};
</script>

<style scoped></style>
