<template>
	<div class="w-full">
		<HomeMenu />

		<div class="max-w-[1200px] mx-auto mt-4">
			<div class="flex gap-x-3 w-full overflow-auto">
				<span v-for="i in 6" class="max-w-[120px] flex-shrink-0 md:max-w-full">
					<img class="rounded-2xl" src="@/assets/images/product1.png" alt="" />
				</span>
			</div>
		</div>
		<div class="max-w-[1200px] mx-auto my-5">
			<div class="flex justify-between w-full overflow-auto">
				<span v-for="i in 2" class="max-w-full flex-shrink-0">
					<img class="rounded-2xl" src="@/assets/images/image-63.png" alt="" />
				</span>
			</div>
		</div>
		<HomeUnboxing />
		<ProductCardField />
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
