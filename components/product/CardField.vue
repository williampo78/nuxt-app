<template>
	<div class="bg-[#FFF8E9] py-6 px-3 md:mx-[-12px]">
		<div class="max-w-[1200px] mx-auto">
			<div class="flex justify-between text-orange-primary">
				<h2 class="text-2xl  mb-3"
					><span class="mr-3"
						><font-awesome-icon :icon="['fas', 'fire']" /></span
					>今日最熱銷</h2
				>
				<NuxtLink to="/" class="text-o"
					>查看更多 <font-awesome-icon :icon="['fas', 'chevron-right']"
				/></NuxtLink>
			</div>
			<div class="flex gap-3 justify-between w-full overflow-auto ">
				<ProductCard v-for="i in 6" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
