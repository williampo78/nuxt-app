<template>
	<div class="my-5 md:flex md:gap-x-12">
		<MemberMenu />

		<div class="flex-1">
			<h1
				class="text-lg text-center border-b-4 border-blue-primary pb-3 mb-4 md:mb-6 md:text-2xl"
				>{{ currentPage.name }}</h1
			>
			<NuxtPage />
		</div>
	</div>
</template>

<script setup lang="ts">
import { getMemberPointsApi, getMemberExpiringPointsApi } from '~/api/member';


const memberStore = useMember();

const currentPage = computed(() => {
	//computed
	return memberStore.currentPage;
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
await Promise.all([getMemberPoints(), getMemberExpiringPoints()]);
</script>

<style scoped></style>
