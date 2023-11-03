<template>
	<div class="bg-white p-4 rounded-2xl">
		<div>
			<img src="@/assets/images/image-44.png" alt="" />
		</div>
		<small class="mt-4 mb-1 text-xs text-pink-secondary">會員再享 95 折 </small>
		<NuxtLink to="/product/417" class="text-blue-primary mb-6 block">美強生 優兒A+成長奶粉 6罐</NuxtLink>
		<p class="text-red text-xl"
			>$1,800<sub class="text-xs text-gray-400 ml-4 line-through font-medium	">$2,000</sub></p
		>
		<div class="flex justify-between mt-4">
			<div class="flex gap-2 text-xs text-pink-secondary">
				<span class="py-0.5 px-1.5 border border-pink-secondary rounded"
					>折扣</span
				>
				<span class="py-0.5 px-1.5 border border-pink-secondary rounded"
					>贈</span
				>
			</div>
			<button class="text-blue-primary">
				<font-awesome-icon :icon="['far', 'heart']" />
				<!-- <font-awesome-icon :icon="['fas', 'heart']" /> -->
			</button>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
