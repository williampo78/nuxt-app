<template>
	<div
		class="hidden md:block border-2 border-gray-200 rounded-xl mb-5 text-black overflow-hidden"
	>
		<div v-for="(filter, index) in filters" class="flex">
			<span class="w-[120px] text-center bg-gray-100 py-4">
				{{ filterName(filter.title) }}
			</span>
			<div
				class="flex-1 flex justify-between w-full p-4 border-b border-gray-200"
				:class="{ 'border-none': index === filters.length - 1 }"
			>
				<ul
					class="grid grid-cols-4 flex-1 flex-wrap gap-4"
					:class="{ 'grid-cols-5': findPage }"
				>
					<li
						@click="selectFilter(filter.title, item.id)"
						v-for="item in filter.list"
						class="bg-gray-100 rounded-full font-medium py-1 px-3 text-center cursor-pointer"
						:class="{
							'text-emerald-400 border-2 border-emerald-400 bg-emerald-50':
								route.query[filter.title]?.includes(item.id.toString()),
						}"
					>
						{{ item.name }}
						({{ item.count }})
					</li>
				</ul>
				<span
					v-if="filters.length > 4"
					class="text-emerald-400 font-medium border-l border-gray-300 flex items-center pl-3"
				>
					看更多
					<font-awesome-icon :icon="['fas', 'chevron-down']" class="ml-2" />
				</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { getSearchFilter } from '@/api/find';
interface FilterItem {
	code: string;
	count: number;
	id: number;
	name: string;
}

const route = useRoute();
const router = useRouter();

// const filters = ref();

const brand = ref<FilterItem[]>([]);
const certificate = ref<FilterItem[]>([]);
const group = ref<FilterItem[]>([]);
const ingredient = ref<FilterItem[]>([]);

onMounted(async () => {
	await nextTick();
	getFilter();
});

const filters = computed((): { title: string; list: FilterItem[] }[] => {
	const arr = [];
	if (brand.value.length) {
		arr.push({ title: 'brand', list: brand.value });
	}
	if (certificate.value.length) {
		arr.push({ title: 'certificate', list: certificate.value });
	}
	if (group.value.length) {
		arr.push({ title: 'group', list: group.value });
	}
	if (ingredient.value.length) {
		arr.push({ title: 'ingredient', list: ingredient.value });
	}
	return arr;
});

const findPage = computed((): boolean => {
	return route.name === 'find';
});

const getFilter = async () => {
	const data = await getSearchFilter({
		keyword: route.query.keyword || '',
		category: route.query.category,
		brand: route.query.brand || '',
		group: route.query.group || '',
		ingredient: route.query.ingredient || '',
		certificate: route.query.certificate || '',
		price_min: 0,
		price_max: 0,
	});
	brand.value = data.result.result.BRAND.filter(
		(brand: FilterItem) => brand.count > 0
	);
	group.value = data.result.result.GROUP.filter(
		(group: FilterItem) => group.count > 0
	);
	ingredient.value = data.result.result.INGREDIENT.filter(
		(ingredient: FilterItem) => ingredient.count > 0
	);
	certificate.value = data.result.result.CERTIFICATE.filter(
		(certificate: FilterItem) => certificate.count > 0
	);
};

const filterName = (name: string | number): string => {
	if (name === 'brand') {
		return '品牌';
	}
	if (name === 'certificate') {
		return '認證';
	}
	if (name === 'group') {
		return '適用族群';
	}
	if (name === 'ingredient') {
		return '成分';
	}
	return '';
};

const selectFilter = (title: string, id: number) => {
	const originalQuery = route.query[title];
	if (typeof originalQuery !== 'string' || originalQuery === null) {
		router.push({ query: { ...route.query, [title]: id } });
	} else {
		if (originalQuery.includes(id.toString())) {
			let regex = new RegExp(id + ',?', 'g');
			let query = originalQuery.replace(regex, '');
			router.push({ query: { ...route.query, [title]: query } });
		} else {
			router.push({ query: { ...route.query, [title]: id } });
		}
	}
};

watch(
	() => route.query,
	() => {
		getFilter();
	}
);
</script>

<style scoped></style>
