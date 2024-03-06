<template>
	<div class="relative mb-5 md:hidden z-10">
		<button
			@click.stop="showPagesMenu = !showPagesMenu"
			class="flex justify-between w-full py-2 px-4 border-2 border-gray-300 rounded-md"
		>
			<span>
				<font-awesome-icon :icon="['fas', currentPage.icon]" class="mr-2" />
				{{ currentPage.name }}
			</span>
			<span :class="{ 'rotate-180': showPagesMenu }">
				<font-awesome-icon :icon="['fas', 'chevron-down']" />
			</span>
		</button>
		<ul
			v-if="showPagesMenu"
			class="absolute w-full mt-2 border border-gray-200 rounded-lg bg-white shadow-md"
		>
			<li
				v-for="page in pages"
				:key="page.name"
				class="border-b border-gray-200 last:border-0"
			>
				<nuxt-link class="py-2 px-4 block" :to="page.link">
					<font-awesome-icon :icon="['fas', page.icon]" class="mr-2" />
					{{ page.name }}
				</nuxt-link>
			</li>
			<li> 常見問題 </li>
		</ul>
	</div>

	<div>
		<ul
			class="hidden p-5 bg-member-menu bg-cover rounded-xl shadow-md md:flex flex-col gap-1"
		>
			<li v-for="page in pages" :key="page.name">
				<nuxt-link
					:to="page.link"
					class="block py-2 px-3 w-full"
					:class="{ 'flex items-center gap-4': page.hasMessage }"
					active-class="bg-white bg-opacity-50 rounded-lg"
				>
					<span>
						<font-awesome-icon :icon="['fas', page.icon]" class="mr-2" />
						{{ page.name }}
					</span>
					<span
						v-if="page.hasMessage && messageStore.totalUnread > 0"
						class="flex w-5 h-5 items-center justify-center rounded-full bg-emerald-400 text-white text-xs"
					>
						{{ messageStore.totalUnread }}
					</span>
				</nuxt-link>
			</li>

		</ul>
	</div>
</template>

<script setup lang="ts">
const route = useRoute();
const messageStore = useMessage();
const memberStore = useMember();

onMounted(() => {
	const body = document.querySelector('body');
	body?.addEventListener('click', closeMenu);
});

onUnmounted(() => {
	const body = document.querySelector('body');
	body?.removeEventListener('click', closeMenu);
});
const closeMenu = () => {
	showPagesMenu.value = false;
};

const showPagesMenu = ref<boolean>(false);

//computed
const pages = computed(() => {
	return memberStore.pages;
});

const currentPage = computed(() => {
	return memberStore.currentPage;
});
</script>

<style scoped></style>
