<template>
	<div class="min-w-[210px]">
		<ul
			class="border-2 border-gray-200 rounded-lg text-gray-800 cursor-pointer"
		>
			<li
				v-for="category in menuStore.categories"
				:key="category.id"
				class="border-b border-gray-200 last:border-b-0"
			>
				<div
					@click="toggleCategoryIds(category.id)"
					class="py-2 px-4 flex justify-between gap-12 hover:bg-gray-200"
					:class="{
						'bg-gray-200 text-emerald-400': chosenCategory.id === category.id,
					}"
				>
					<span>{{ category.name }}</span>
					<span
						class="transition-all duration-100 ease-linear"
						:class="{ '-rotate-180': openedCategoryIds.includes(category.id) }"
						><font-awesome-icon :icon="['fas', 'chevron-down']"
					/></span>
				</div>
				<ul v-if="openedCategoryIds.includes(category.id)" class="text-sm">
					<li
						v-for="sub in category.cateInfo"
						:key="sub.id"
						class="py-1.5 pl-5 px-3"
					>
						<div
							@click="toggleSubCategoryIds(sub.id)"
							class="flex justify-between hover:text-emerald-400"
							:class="{
								'text-emerald-400': sub.id === chosenCategory.sub[0].id,
							}"
						>
							<span>
								{{ sub.name }}
							</span>
							<span
								class="transition-all duration-100 ease-linear"
								:class="{
									'-rotate-180': openedSubCategoryIds.includes(sub.id),
								}"
								><font-awesome-icon :icon="['fas', 'chevron-down']"
							/></span>
						</div>
						<ul v-if="openedSubCategoryIds.includes(sub.id)" class="ml-4">
							<li
								@click="getAdvanceSearchCategory(further.id)"
								v-for="further in sub.cateInfo"
							>
								<nuxt-link
									:to="{ query: { category: further.id } }"
									class="block py-1.5 hover:text-emerald-400"
									:class="{'text-emerald-400': further.id === +route.query.category!}"
								>
									{{ further.name }}
									({{ further.count }})
								</nuxt-link>
							</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { getAdvanceSearchCategoryApi } from '@/api/find';
const menuStore = useMenu();
const route = useRoute();
const router = useRouter();

const openedCategoryIds = ref<number[]>([]);
const openedSubCategoryIds = ref<number[]>([]);

const chosenCategory = ref<any>({});

onMounted(async () => {
	await nextTick();
	getAdvanceSearchCategory(+route.query.category!);
});

const toggleCategoryIds = (id: number): void => {
	if (openedCategoryIds.value.includes(id)) {
		openedCategoryIds.value = openedCategoryIds.value.filter((cateId) => {
			return cateId !== id;
		});
	} else {
		openedCategoryIds.value.push(id);
	}
};
const toggleSubCategoryIds = (id: number): void => {
	if (openedSubCategoryIds.value.includes(id)) {
		openedSubCategoryIds.value = openedSubCategoryIds.value.filter((cateId) => {
			return cateId !== id;
		});
	} else {
		openedSubCategoryIds.value.push(id);
	}
};

//取得目前的分類
const getAdvanceSearchCategory = async (id: number): Promise<void> => {
	openedCategoryIds.value = [];
	openedSubCategoryIds.value = [];
	const data = await getAdvanceSearchCategoryApi({ category: id });
	chosenCategory.value = data.result[0];
	const category = data.result;

	openedCategoryIds.value.push(category[0].id);
	openedSubCategoryIds.value.push(category[0].sub[0].id);
};
</script>

<style scoped></style>
