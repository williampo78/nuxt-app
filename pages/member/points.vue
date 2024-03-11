<template>
	<div>
		<PointsBrief />
		<div class="flex border-b-4 border-amber-400">
			<button
				@click="tabIndex = index"
				v-for="(tab, index) in tabs"
				:key="index"
				class="flex-1 py-2 text-gray-400 bg-gray-100 rounded-t-xl"
				:class="{ 'text-white !bg-amber-400': tabIndex === index }"
			>
				{{ tab }}
			</button>
		</div>
		<ul class="text-gray-800">
			<li
				class="hidden md:grid md:grid-cols-4 text-center text-xl py-4 border-b-2 border-gray-800"
			>
				<span v-for="column in columns" :key="column">
					{{ column }}
				</span>
			</li>
			<PointsList
				v-if="tabIndex === 0"
				:list="requiredPoints"
				:tab-index="tabIndex"
			/>
			<PointsList
				v-else
				:list="expiringPoints"
				:tab-index="tabIndex"
			/>
		</ul>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	middleware: ['auth'],
});
const memberStore = useMember();
const tabs = ref<string[]>(['獲得/使用紀錄', '即將到期']);
const tabIndex = ref<number>(0);

const columns = ref<string[]>(['日期', '獲得 / 使用紀錄', '點數', '到期日']);

const requiredPoints = computed(() => {
	return memberStore.pointInfo.list;
});

const expiringPoints = computed(() => {
	return memberStore.expiringPointInfo.list;
});
</script>

<style scoped></style>
