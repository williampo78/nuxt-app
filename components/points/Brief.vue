<template>
	<div class="border-2 border-blue-forth rounded-xl overflow-hidden shadow-md mb-8">
		<div
			class="text-center bg-emerald-400 text-sm text-white py-2 md:text-base"
		>
			<p>點數說明</p>
		</div>
		<div class="flex bg-teal-50 py-5 px-2 text-black md:px-10">
			<div class="flex-1 flex justify-center gap-3 border-r border-blue-forth">
				<span
					class="bg-sky-300 flex justify-center items-center w-10 h-10 rounded-lg text-sm text-white md:text-2xl md:w-16 md:h-16"
				>
					<font-awesome-icon :icon="['fas', 'coins']" />
				</span>
				<div>
					<p class="text-xs md:text-base">目前可用點數</p>
					<p class="text-emerald-400 text-xl md:text-3xl"
						>{{ memberStore.pointInfo.totalPoints }} <sub class="text-black text-xs ml-1">點</sub>
					</p>
				</div>
			</div>
			<div class="flex-1 flex justify-center gap-3">
				<span
					class="bg-sky-300 flex justify-center items-center w-10 h-10 rounded-lg text-sm text-white md:text-2xl md:w-16 md:h-16"
				>
					<font-awesome-icon :icon="['fas', 'coins']" />
				</span>
				<div>
					<p class="text-xs md:text-base"> 即將到期</p>
					<p class="text-red text-xl md:text-3xl"
						>{{ memberStore.pointInfo.expiringPoints }} <sub class="text-black text-xs ml-1">點</sub>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const memberStore = useMember();
</script>

<style scoped></style>
