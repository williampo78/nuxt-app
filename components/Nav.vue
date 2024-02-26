<template>
	<div class="max-w-[1200px] mx-auto sticky top-[52px] md:top-[120px] z-[5]">
		<div class="md:grid md:grid-cols-[204px,1fr]">
			<span
				class="hidden bg-blue-primary align-middle text-white md:flex items-center px-4 py-2"
			>
				<span class="text-[20px] mr-2">
					<font-awesome-icon :icon="['fas', 'bars']" />
				</span>
				分類總覽
			</span>
			<div class="relative font-bold bg-white">
				<div class="flex py-[10px] text-blue-primary">
					<ul v-if="!open" class="flex overflow-auto gap-4 px-3 hide-scrollbar">
						<li
							v-for="(item, index) in navItems"
							:key="index"
							class="flex-shrink-0 cursor-pointer hover:text-emerald-400"
						>
							<AdLink :item="item">
								{{ item.name }}
							</AdLink>
						</li>
					</ul>
					<span class="flex-1 px-3" v-else>選擇分類</span>
					<span
						@click="open = !open"
						class="w-[42px] flex-shrink-0 flex justify-center items-center border-l border-gray-300 md:hidden"
					>
						<font-awesome-icon
							:icon="['fas', 'chevron-right']"
							class="transition ease"
							:class="{ 'rotate-90': open }"
						/>
					</span>
				</div>
				<transition name="drop">
					<ul
						v-if="open"
						class="bg-yellow-forth p-4 grid grid-cols-3 gap-2 absolute w-full"
					>
						<li
							v-for="(item, index) in navItems"
							:key="index"
							class="text-center text-blue-primary bg-white border-2 border-blue-primary rounded-full"
						>
							{{ item.name }}</li
						>
					</ul>
				</transition>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { TextSlot } from '@/types/ads';
const adStore = useAds();
const router = useRouter();

const open = ref<boolean>(false);

const navItems = computed(() => {
	return adStore.ads.H000;
});

const redirect = (navItem: TextSlot) => {
	const action = navItem.img_action;
	if (action === 'U' && navItem.url) {
		window.open(navItem.url, navItem.target_blank ? '_blank' : '_self');
	} else if (action === 'C') {
		router.push({
			path: '/find/category',
			query: { category: navItem.target_cate_hierarchy },
		});
	}
};
</script>

<style scoped lang="scss">
.drop-enter-active {
	transition: all 0.5s ease;
}

.drop-leave-active {
	transition: all 0.5s ease;
}

.drop-enter-from,
.drop-leave-to {
	transform: translateY(-20px);
	opacity: 0;
}
</style>
