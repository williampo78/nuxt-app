<template>
	<li class="">
		<p class="p-2 bg-sky-50 text-sm md:hidden">{{ item.productName }}</p>
		<div class="flex gap-2 p-3">
			<div class="flex md:w-[58%]">
				<img :src="item.productPhoto" alt="" class="w-[80px] md:w-[110px]" />
				<div class="ml-2 hidden md:block">
					<p>
						{{ item.productName }}
					</p>
					<p class="text-sm text-gray-500 font-medium mt-3">{{
						item.itemList[0].itemSpec1
					}}</p>
				</div>
			</div>
			<div class="flex-1 text-xs text-gray-500 font-medium md:hidden">
				<p class="">{{ item.itemList[0].itemSpec1 }}</p>
				<p class="mt-1 mb-2">單價: ${{ item.sellingPrice }}</p>
				<p class="text-base text-red font-bold"
					>小計: ${{ formatNumberWithCommas(item.sellingPrice * quantity) }}</p
				>
			</div>
			<div>
				<div
					class="flex w-[100px] md:w-[130px] border-2 border-gray-300 rounded-md text-gray-400 h-10"
				>
					<button @click="decrease()" class="flex-1">
						<font-awesome-icon :icon="['fas', 'minus']" />
					</button>
					<input
						@blur="typeInQuantity()"
						v-model="quantity"
						type="number"
						class="w-16 border-x border-y-0 border-solid border-gray-300 text-black text-center"
					/>
					<button @click="increase()" class="flex-1">
						<font-awesome-icon :icon="['fas', 'plus']" />
					</button>
				</div>
				<!-- 手機版加入收藏/移除 -->
				<div class="flex justify-between px-1 mt-2 md:hidden">
					<button @click="toggleColllection()">
						<font-awesome-icon
							class="text-red"
							v-if="isCollected(item.productID!)"
							:icon="['fas', 'heart']"
						/>
						<font-awesome-icon
							class="text-gray-400"
							v-else="isCollected(item.productID!)"
							:icon="['fa-regular', 'heart']"
						/>
					</button>
					<button class="text-gray-400">
						<font-awesome-icon :icon="['fas', 'trash-can']" />
					</button>
				</div>
			</div>
			<p class="flex-1 text-center hidden md:block">${{ item.sellingPrice }}</p>
			<p class="flex-1 text-center text-red hidden md:block"
				>${{ formatNumberWithCommas(item.sellingPrice * quantity) }}
			</p>
			<!-- 電腦版加入收藏/移除 -->
			<div class="w-10 hidden md:flex flex-col gap-6">
				<button @click="toggleColllection()">
					<font-awesome-icon
						class="text-red"
						v-if="isCollected(item.productID!)"
						:icon="['fas', 'heart']"
					/>
					<font-awesome-icon
						class="text-gray-400"
						v-else="isCollected(item.productID!)"
						:icon="['fa-regular', 'heart']"
					/>
				</button>
				<button class="text-gray-400">
					<font-awesome-icon :icon="['fas', 'trash-can']" />
				</button>
			</div>
		</div>
	</li>
</template>

<script setup lang="ts">
import { updateCartApi } from '@/api/cart';
import { getStockApi } from '@/api/product';
import { CartItem } from '~/types/cart';
import { formatNumberWithCommas } from '@/composables/useFormat';

const emits = defineEmits(['getCartList']);

const { isCollected } = useGeneral();
const collectionStore = useCollection();
const props = defineProps<{
	item: CartItem;
}>();

const quantity = ref(1);
const stockQuantity = ref(10);

onMounted(() => {
	quantity.value = props.item.itemList[0].itemQty || 1;
});

const specId = computed(() => {
	return props.item.itemList[0].itemId;
});

const getStock = async () => {
	const data = await getStockApi({ item_id: specId.value });
	stockQuantity.value =
		data.result.specifiedQty > 10 ? 10 : data.result.specifiedQty;
};

const updateCart = async () => {
	await updateCartApi({
		item_id: specId.value,
		item_qty: quantity.value,
		status_code: 0,
	});
	emits('getCartList');
};

const decrease = async () => {
	if (quantity.value > 1) {
		quantity.value--;
		await updateCart();
	}
};

const increase = async () => {
	if (quantity.value >= 10) {
		return;
	}
	await getStock();
	if (quantity.value < stockQuantity.value) {
		quantity.value++;
		await updateCart();
	}
};

const toggleColllection = () => {
	collectionStore.toggleColllection({
		id: props.item.productID!,
		isCollected: isCollected(props.item.productID!),
	});
};

const typeInQuantity = async () => {
	if(quantity.value >=10){
		quantity.value = 10
	}
	await updateCart();
};
</script>

<style scoped></style>
