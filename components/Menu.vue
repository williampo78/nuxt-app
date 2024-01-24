<template>
	<div class="">
		<transition name="slide-fade">
			<div
				v-if="menuStore.menuShow"
				class="bg-white font-bold fixed z-40 w-full h-[calc(100vh-52px)] flex top-[52px] md:hidden"
			>
				<div class="overflow-scroll">
					<div
						@click="chosenCateId = index"
						v-for="(category, index) in categories"
						:class="{
							'bg-yellow-forth': index === chosenCateId,
							'text-emerald-400': index === chosenCateId,
						}"
						class="w-[120px] h-[120px] flex flex-col justify-center items-center border-b border-gray-200 last:border-none"
					>
						<!-- <span class="text-[32px]"
							><font-awesome-icon :icon="['fas', 'whiskey-glass']"
						/></span> -->
						<img :src="category.icon" alt="" class="w-12 mb-1" />
						{{ category.name }}
					</div>
				</div>
				<div class="flex-1 bg-yellow-forth h-full overflow-scroll">
					<ul v-for="(sub, i) in subCategories" @click="chosenSubId = i">
						<li class="py-3 px-4 flex justify-between">
							<span :class="{ 'text-emerald-400': chosenSubId === i }">
								{{ sub.name }}
							</span>
							<span
								class="transition ease-linear"
								:class="{ 'rotate-90 text-emerald-400 ': chosenSubId === i }"
								><font-awesome-icon :icon="['fas', 'chevron-right']"
							/></span>
						</li>
						<li class="bg-white">
							<ul v-if="i === chosenSubId">
								<li
									class="py-3 px-4 border-b border-gray-200 last:border-none"
									v-for="further in sub.cateInfo"
									@click="gotoCate(further)"
								>
									{{ further.name }}
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</transition>
	</div>
</template>

<script setup lang="ts">
import { FurtherCategory } from '@/types/category';
const router = useRouter();
const menuStore = useMenu();
const chosenCateId = ref<number | null>(1);
const chosenSubId = ref<number | null>(1);

const categories = computed(() => {
	return menuStore.categories;
});

const subCategories = computed(() => {
	if (chosenCateId.value) {
		return categories.value[chosenCateId.value].cateInfo;
	}
	return {};
});

const gotoCate = (further: FurtherCategory) => {
	if (further.type === 'P') {
		router.push({
			path: '/find/category',
			query: { category: further.id },
		});
	} else if (further.type === 'M') {
		router.push({
			path: `/campaign/${further.campaignUrlCode}`,
			query: { eventId: further.campaignID },
		});
	}

	menuStore.closeMenu()
};
</script>

<style scoped>
.slide-fade-enter-active {
	transition: all 0.5s ease;
}

.slide-fade-leave-active {
	transition: all 0.5s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateX(-20px);
	opacity: 0;
}
</style>
