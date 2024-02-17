<template>
	<div class="flex justify-between mb-4 font-medium">
		<div class="rounded-lg bg-gray-100 text-black overflow-hidden flex">
			<button
				@click="changeOrderBy('launched')"
				class="py-2 w-[90px]"
				:class="{ 'bg-blue-primary text-white': orderBy === 'launched' }"
				>新上市</button
			>
			<button
				@click="changeOrderBy('price')"
				class="flex justify-center py-2 w-[90px]"
				:class="{ 'bg-blue-primary text-white': orderBy === 'price' }"
			>
				價格
				<span class="relative w-6 h-full text-gray-400">
					<font-awesome-icon
						:icon="['fas', 'caret-up']"
						class="absolute text-lg top-0 right-2.5"
						:class="{ 'text-white': orderBy === 'price' && sort === 'ASC' }"
					/>
					<font-awesome-icon
						:icon="['fas', 'caret-down']"
						class="absolute text-lg top-2 right-2.5"
						:class="{ 'text-white': orderBy === 'price' && sort === 'DESC' }"
					/>
				</span>
			</button>
		</div>
		<div class="hidden md:flex items-center gap-1.5">
			<div
				class="border-2 border-gray-300 rounded-lg overflow-hidden pl-4 py-1 text-gray-400"
			>
				$
				<input
					v-model="minPrice"
					type="text"
					id="max-price"
					placeholder="最低價"
					class="max-w-[70px]"
				/>
			</div>
			-
			<div
				class="border-2 border-gray-300 rounded-lg overflow-hidden pl-4 py-1 text-gray-400"
			>
				$
				<input
					v-model="maxPrice"
					type="text"
					id="min-price"
					placeholder="最高價"
					class="max-w-[70px]"
				/>
			</div>
			<button
				@click="searchPrice()"
				class="py-2 px-5 rounded-lg bg-blue-primary text-white"
				>搜尋</button
			>
		</div>
	</div>
</template>

<script setup lang="ts">
const router = useRouter();
const route = useRoute();
const orderBy = ref<string>('launched');
const sort = ref<string>('DESC');
const minPrice = ref<number | null>();
const maxPrice = ref<number | null>();

onMounted(() => {
	if (route.query.minPrice) {
		minPrice.value = +route.query.minPrice;
	}
	if (route.query.maxPrice) {
		maxPrice.value = +route.query.maxPrice;
	}
});

//改變排序條件
const changeOrderBy = (condition: string) => {
	orderBy.value = condition;
	if (orderBy.value === 'price') {
		sort.value = route.query.sort === 'DESC' ? 'ASC' : 'DESC';
	}
	router.push({
		query: { ...route.query, orderBy: orderBy.value, sort: sort.value },
	});
};

const searchPrice = () => {
	router.push({
		query: {
			...route.query,
			minPrice: minPrice.value,
			maxPrice: maxPrice.value,
		},
	});
};

watch(
	() => route.query,
	(newVal, oldVal) => {
		if (!newVal.orderBy) {
			orderBy.value = 'launched';
		}
		minPrice.value = route.query.minPrice ? +route.query.minPrice : null;
		maxPrice.value = route.query.maxPrice ? +route.query.maxPrice : null;
	}
);
</script>

<style scoped></style>
