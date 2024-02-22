<template>
	<div class="flex gap-4">
		<button
			class="bg-blue-primary text-white py-3 rounded-lg w-52"
			:class="{ '!bg-gray-400': stock.stockQty <= 0 }"
		>
			{{ specStatus }}
		</button>
		<button
			v-if="stock.stockQty"
			class="border-2 border-blue-primary text-blue-primary py-3 rounded-lg w-52"
			>加入購物車</button
		>
		<button class="bg-pink-third text-white rounded-lg px-4">
			<font-awesome-icon :icon="['far', 'heart']" />
			收藏
		</button>
	</div>
</template>

<script setup lang="ts">
const { stock } = useProduct();

const specStatus = computed(() => {
	if (stock.value.stockQty > 0) {
		return '立即購買';
	} else {
		return '補貨中';
	}
});
</script>

<style scoped></style>
