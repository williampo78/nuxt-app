<template>
	<div class="w-[100vw] flex-1 hidden md:block">
		<div class="max-w-[1200px] mx-auto">
			<div class="flex justify-between gap-x-3 w-full">
				<span v-for="i in 6" class="max-w-[200px]">
					<img class="rounded-2xl" src="@/assets/images/product1.png" alt="" />
				</span>
			</div>
		</div>
		<div class="max-w-[1200px] mx-auto my-5">
			<div class="flex gap-x-3">
				<span v-for="i in 2">
					<img class="rounded-2xl" src="@/assets/images/image-63.png" alt="" />
				</span>
			</div>
		</div>
		<div class="bg-[#FFF8E9] mx-[-12px]">
			<div class="max-w-[1200px] mx-auto">
				<h2 class="text-2xl text-orange-primary"
					><span class="mr-3"><font-awesome-icon :icon="['fas', 'fire']" /></span>今日最熱銷</h2
				>
				<div class="flex justify-between gap-x-3 w-full">
					<span v-for="i in 6" class="max-w-[200px]">
						<img class="rounded-2xl" src="@/assets/images/product1.png" alt="" />
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
