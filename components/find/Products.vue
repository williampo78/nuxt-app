<template>
	<div
		class="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3"
		:class="{ 'md:grid-cols-5': findPage }"
	>
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
</template>

<script setup lang="ts">
import { getAdvanceSearchListApi } from '@/api/find';
const emits = defineEmits(['checkProductListLength']);
const route = useRoute();

const products = ref<any[]>([]);

onMounted(async () => {
	await nextTick();
	getAdvanceSearchList();
});

const categoryPage = computed((): boolean => {
	return route.name === 'find-category';
});
const findPage = computed((): boolean => {
	return route.name === 'find';
});

//取得商品列表
const getAdvanceSearchList = async () => {
	const data = await getAdvanceSearchListApi({
		category: +route.query.category!,
		order_by: route.query.orderBy,
		keyword: route.query.keyword || '',
		page: 1,
		price_max: route.query.maxPrice ? +route.query.maxPrice : 99999,
		price_min: route.query.minPrice ? +route.query.minPrice : 0,
		size: 500,
		sort: route.query.sort || 'DESC',
		brand: route.query.brand || '',
		group: route.query.group || '',
		certificate: route.query.certificate || '',
		ingredient: route.query.ingredient || '',
	});
	products.value = data.result.list;

	emits('checkProductListLength', products.value && products.value.length > 0);
};

watch(
	() => route.query,
	(newVal, oldVal) => {
		getAdvanceSearchList();
	}
);
</script>

<style scoped></style>
