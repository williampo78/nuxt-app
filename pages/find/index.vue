<template>
	<ul class="flex flex-wrap gap-2 my-3">
		<li>
			<nuxt-link to="/">
				<font-awesome-icon :icon="['fas', 'house']" />
			</nuxt-link>
		</li>
		<li>
			<font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2" />
			{{ route.query.keyword }} 搜尋結果
		</li>
	</ul>
	<FindFilter />
	<FindProducts @checkProductListLength="checkResult" />
	<div
		v-if="!hasResult"
		class="flex flex-col justify-center items-center mt-12"
	>
		<h4 class="text-xl text-black mb-4">
			很抱歉,找不到與
			<span>{{ route.query.keyword }}</span>
			相關商品,建議您:
		</h4>
		<ul class="list-disc text-gray-600 font-medium">
			<li>檢查有無錯別字</li>
			<li>試著縮短關鍵字</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
const route = useRoute();
const hasResult = ref<boolean>(false);

const checkResult = (val: boolean) => {
	hasResult.value = val;
};
</script>

<style scoped></style>
