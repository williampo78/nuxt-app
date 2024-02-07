<template>
	<div
		class="max-w-[1200px] mx-auto font-bold text-sm hidden md:block"
		@mouseleave="(chosenCategoryId = null), (subCategories = {})"
	>
		<div class="md:grid md:grid-cols-[204px,1fr] relative">
			<div class="bg-gray-50">
				<ul class="text-gray-500">
					<li
						v-for="category in categories"
						class="py-2.5 px-4 flex justify-between items-center cursor-pointer"
						:class="{
							'bg-yellow-forth text-emerald-400':
								category.id === chosenCategoryId,
						}"
						@mouseenter="selectCategory(category)"
					>
						<span>
							{{ category.name }}
						</span>
						<span v-if="category.id === chosenCategoryId">
							<font-awesome-icon :icon="['fas', 'chevron-right']" />
						</span>
					</li>
				</ul>
			</div>
			<!-- 第二層 -->
			<div
				v-if="chosenCategoryId"
				class="bg-white h-full w-[calc(100%-204px)] absolute right-0 top-0 flex border-2 border-emerald-400 rounded-r-lg"
			>
				<ul class="w-[122px] py-2 bg-yellow-forth relative">
					<li
						v-for="category in subCategories"
						class="second text-center inline-flex items-start my-[12px]"
					>
						<span class="w-[122px] h-full px-[10px] font-bold text-emerald-400">
							{{ category.name }}
						</span>
						<ul class="w-[620px] max-w-[620px] px-[20px] flex flex-wrap">
							<li
								@click="gotoCate(item)"
								v-for="item in category.cateInfo"
								class="cursor-pointer px-3 border-r border-black last:border-none hover:text-emerald-400"
							>
								{{ item.name }}
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<div class="hidden md:block">
				<img class="h-full" src="@/assets/images/image-38.png" alt="" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const menuStore = useMenu();
const router = useRouter();
const {
	categories,
	subCategories,
	chosenCategoryId,
	selectCategory,
	gotoCate,
} = useCategories();
</script>

<style scoped></style>
