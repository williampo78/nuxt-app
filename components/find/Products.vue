<template>
	<div>
		<div class="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
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

//取得商品列表
const getAdvanceSearchList = async () => {
	const data = await getAdvanceSearchListApi({
		category: +route.query.category!,
		order_by: route.query.orderBy,
		page: 1,
		price_max: route.query.maxPrice ? +route.query.maxPrice : 99999,
		price_min: route.query.minPrice ? +route.query.minPrice : 0,
		size: 500,
		sort: route.query.sort || 'DESC',
		brand:route.query.brand || '',
		group:route.query.group || '',
		certificate:route.query.certificate || '',
		ingredient:route.query.ingredient || '',

	});
	products.value = data.result.list;
};

watch(
	() => route.query,
	(newVal, oldVal) => {
		getAdvanceSearchList();
	}
);
</script>

<style scoped></style>
