<template>
	<div class="max-w-[1200px] mx-auto font-bold">
		<div class="md:grid md:grid-cols-[204px,1fr]">
			<span class="hidden bg-blue-primary align-middle text-white md:flex items-center px-4 py-2">
				<span class="text-[20px] mr-2"> <font-awesome-icon :icon="['fas', 'bars']" /> </span>
				分類總覽
			</span>
			<HomeNav />

			<div v-if="route.path === '/'" class="hidden md:block bg-gray-50">
				<ul class="text-gray-500">
					<li class="py-[10px] px-4">成人飲品</li>
					<li class="py-[10px] px-4">成人飲品</li>
					<li class="py-[10px] px-4">成人飲品</li>
					<li class="py-[10px] px-4">成人飲品</li>
					<li class="py-[10px] px-4">成人飲品</li>
					<li class="py-[10px] px-4">成人飲品</li>
					<li class="py-[10px] px-4">成人飲品</li>
					<li class="py-[10px] px-4">成人飲品</li>
				</ul>
			</div>
			<div v-if="route.path === '/'" class="hidden md:block">
				<img class="h-full" src="@/assets/images/image-38.png" alt="" />
			</div>
		</div>

		<transition name="slide-fade">
			<div
				v-if="menuStore.menuShow"
				class="bg-white font-bold absolute z-40 w-full h-[calc(100vh-52px)] flex top-[52px] md:hidden"
			>
				<div class="overflow-scroll">
					<div
						@click="chosenCateId = i"
						v-for="i in 10"
						:class="{
							'bg-yellow-forth': i === chosenCateId,
							'text-emerald-400': i === chosenCateId,
						}"
						class="w-[120px] h-[120px] flex flex-col justify-center items-center border-b border-gray-200 last:border-none"
					>
						<span class="text-[32px]"><font-awesome-icon :icon="['fas', 'whiskey-glass']" /></span>
						成人飲品
					</div>
				</div>
				<div class="flex-1 bg-yellow-forth h-full overflow-scroll">
					<ul v-for="i in 5" @click="chosenSubId = i">
						<li class="py-3 px-4 flex justify-between">
							<span :class="{ 'text-emerald-400': chosenSubId === i }"> 成人飲品 </span>
							<span
								class="transition ease-linear"
								:class="{ 'rotate-90 text-emerald-400 ': chosenSubId === i }"
								><font-awesome-icon :icon="['fas', 'chevron-right']"
							/></span>
						</li>
						<li class="bg-white">
							<ul v-if="i === chosenSubId">
								<li class="py-3 px-4 border-b border-gray-200 last:border-none" v-for="j in 3"
									>123</li
								>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</transition>
	</div>
</template>

<script setup lang="ts">
const route = useRoute();
const menuStore = useMenu();
const chosenCateId = ref<number | null>(1);
const chosenSubId = ref<number | null>(1);
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
