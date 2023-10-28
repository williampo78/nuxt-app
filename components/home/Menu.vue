<template>
	<div class="max-w-[1200px] mx-auto">
		<HomeNav class="md:hidden"/>
		<Transition name="slide-fade">
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
		</Transition>
	</div>
</template>

<script setup lang="ts">
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
.drop-fade-enter-active {
	transition: all 0.8s ease;
}

.drop-fade-leave-active {
	transition: all 0.5s ease;
}

.drop-fade-enter-from,
.drop-fade-leave-to {
	transform: translateY(-20px);
	opacity: 0;
}
</style>
