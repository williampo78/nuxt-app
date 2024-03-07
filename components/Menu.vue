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
									@click="gotoCate(further), closeMenu()"
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
const { categories, gotoCate } = useCategories();

const menuStore = useMenu();
const chosenCateId = ref<string>('');
const chosenSubId = ref<number>('');
onMounted(() => {
	preselect();
});

const subCategories = computed(() => {
	if (chosenCateId.value) {
		return categories.value[chosenCateId.value].cateInfo;
	}
	return {};
});

const closeMenu = () => {
	menuStore.closeMenu();
};

const preselect = () => {
	chosenCateId.value = Object.keys(categories.value)[0] || null;
	if (chosenCateId.value)
		chosenSubId.value = Object.keys(categories.value[chosenCateId.value].cateInfo)[0] || null;
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
