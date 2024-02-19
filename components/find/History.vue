<template>
	<ul
		@click.stop
		class="absolute top-[120%] w-[90%] text-sm font-medium bg-white rounded-lg overflow-hidden"
	>
		<li class="p-3 flex justify-between text-black border-b border-gray-200">
			<p>最近搜尋</p>
			<button @click="clearAllHistory()" class="text-gray-400">
				全部清除
				<font-awesome-icon :icon="['fas', 'xmark']" />
			</button>
		</li>
		<ul class="font-bold">
			<li
				v-for="keyword in searchHistory"
				:key="keyword"
				class="p-3 border-b border-r-gray-200"
			>
				<nuxt-link :to="{ path: '/find', query: { keyword } }">
					{{ keyword }}
				</nuxt-link>
			</li>
		</ul>
		<li class="p-3 text-gray-400"> 保留最近5筆搜尋條件 </li>
	</ul>
</template>

<script setup lang="ts">
const searchHistory = ref<string[]>([]);
onMounted(() => {
	const history = localStorage.getItem('searchHistory');
	if (history) {
		searchHistory.value = JSON.parse(history);
	}
});

const clearAllHistory = () => {
	localStorage.removeItem('searchHistory')
	searchHistory.value = []
};
</script>

<style scoped></style>
