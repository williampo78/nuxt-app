<template>
	<div>
		<div class="grid grid-cols-4 gap-3">
			<ProductCard
				v-for="product in products"
				:id="product.product_id"
				:product-name="product.product_name"
				:img-url="product.product_photo"
				:promotion="product.promotion_desc"
				:list-price="product.list_price"
				:selling-price="product.selling_price"
				:collected="product.collections"
				:cart="product.cart"
				:promotion-labels="product.promotion_label"
				class="border border-gray-200"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { getAdvanceSearchListApi } from '@/api/find';
const route = useRoute();

const products = ref<any[]>([]);

onMounted(async () => {
	await nextTick();
	getAdvanceSearchList();
});
const getAdvanceSearchList = async () => {
	const data = await getAdvanceSearchListApi({
		category: +route.query.category!,
		order_by: 'launched',
		page: 1,
		price_max: 0,
		price_min: 0,
		size: 500,
		sort: 'DESC',
	});
	products.value = data.result.list;
};

watch(
	() => route.query.category,
	() => {
		getAdvanceSearchList();
	}
);
</script>

<style scoped></style>
