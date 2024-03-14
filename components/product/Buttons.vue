<template>
	<div class="flex gap-4">
		<button
			class="bg-blue-primary text-white py-3 rounded-lg w-52"
			:class="{
				'!bg-gray-400 cursor-default': productStore.stock.stockQty <= 0 || !startSelling,
			}"
		>
			{{ specStatus }}
		</button>
		<button
			v-if="productStore.stock && startSelling"
			class="border-2 border-blue-primary text-blue-primary py-3 rounded-lg w-52"
			>加入購物車</button
		>
		<button
			@click="toggleColllection()"
			class="bg-pink-third text-white rounded-lg px-4"
			aria-label="加入/取消收藏"
		>
			<font-awesome-icon
				v-if="isCollected"
				:icon="['fas', 'heart']"
				class="text-red"
			/>
			<font-awesome-icon v-else :icon="['far', 'heart']" />
			收藏
		</button>
	</div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import { ProductInfo } from '@/types/product';
const collectionStore = useCollection();

const props = defineProps<{
	productInfo: ProductInfo;
}>();

const productStore = useProduct();

//已經開賣
const startSelling = computed(() => {
	return dayjs().isAfter(dayjs(props.productInfo.start_selling));
});

//規格可販售狀態
const specStatus = computed(() => {
	if (!startSelling.value) {
		return '即將開賣';
	}
	if (productStore.stock.stockQty > 0) {
		return '立即購買';
	} else {
		return '補貨中';
	}
});

//是否已收藏
const isCollected = computed((): boolean => {
	return !!collectionStore.collections.find((c) => {
		return c.product_id === +props.productInfo.product_id;
	});
});

const toggleColllection = () => {
	collectionStore.toggleColllection({
		id: props.productInfo.product_id,
		isCollected: isCollected.value,
	});
};
</script>

<style scoped></style>
