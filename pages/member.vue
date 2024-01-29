<template>
	<div
		class="my-5 text-gray-900 md:flex md:gap-x-12"
		@click="showPagesMenu = false"
	>
		<div class="relative mb-5 md:hidden">
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
					<NuxtLink class="py-2 px-4 block" :to="page.link">
						<font-awesome-icon :icon="['fas', page.icon]" class="mr-2" />
						{{ page.name }}
					</NuxtLink>
				</li>
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
						active-class="bg-white bg-opacity-50 rounded-lg"
					>
						<font-awesome-icon :icon="['fas', page.icon]" class="mr-2" />
						{{ page.name }}
					</nuxt-link>
				</li>
			</ul>
		</div>

		<div class="flex-1">
			<h1
				class="text-lg text-center border-b-4 border-blue-primary pb-3 mb-4 md:text-2xl"
				>{{ currentPage.name }}</h1
			>
			<NuxtPage />
		</div>
	</div>
</template>

<script setup lang="ts">
import { getMemberPointsApi, getMemberExpiringPointsApi } from '~/api/member';

const memberStore = useMember();
const route = useRoute();

interface Page {
	name: string;
	link: string;
	icon: string;
	hasMessage?: boolean;
}
const pages = ref<Page[]>([
	{
		name: '會員中心',
		link: '/member/center',
		icon: 'house',
	},
	// {
	// 	name: '訂單查詢',
	// 	link: '/member/order-list',
	// 	icon: 'rectangle-list',
	// },
	{
		name: '我的點數',
		link: '/member/points',
		icon: 'coins',
	},
	// {
	// 	name: '我的收藏',
	// 	link: '/member/collection',
	// 	icon: 'heart',
	// },
	// {
	// 	name: '我的資料',
	// 	link: '/member/account-info',
	// 	icon: 'user',
	// },
	// {
	// 	name: '常用收件人',
	// 	link: '/member/setting-recipient',
	// 	icon: 'address-book',
	// },
	// {
	// 	name: '我的通知',
	// 	link: '/member/notification-message',
	// 	icon: 'bell',
	// 	hasMessage: true,
	// },
	// {
	// 	name: '變更密碼',
	// 	link: '/member/account-password',
	// 	icon: 'gear',
	// },
	// {
	// 	name: '常見問題',
	// 	link: '/customer-service/qa',
	// 	icon: 'circle-question',
	// },
]);
const showPagesMenu = ref<boolean>(false);

//computed
const currentPage = computed((): Page => {
	return (
		pages.value.find((page) => {
			return page.link === route.path;
		}) || pages.value[0]
	);
});

//methods

const getMemberPoints = async () => {
	const data = await getMemberPointsApi();
	memberStore.setPointInfo(data.result);
};
const getMemberExpiringPoints = async () => {
	const data = await getMemberExpiringPointsApi();
	memberStore.setExpiringPointInfo(data.result);
};
// await getMemberPoints();
// await getMemberExpiringPoints()
await Promise.all([getMemberPoints(), getMemberExpiringPoints()]);
</script>

<style scoped></style>
