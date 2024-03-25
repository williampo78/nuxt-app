<template>
	<div class="text-black">
		<Breadcrumb :crumbs="[{ name: '購物車' }]" />
		<ul
			class="flex justify-center gap-5 bg-gray-50 text-sm p-5 mb-5 md:text-base"
		>
			<li
				v-for="step in steps"
				class="flex flex-col items-center gap-3 md:flex-row md:gap-5"
			>
				<span
					class="flex justify-center items-center border bg-white rounded-full w-8 h-8"
					:class="{ '!bg-sky-300 text-white': step.index === currentStep }"
				>
					{{ step.index }}
				</span>
				<span :class="{ ' text-sky-300': step.index === currentStep }">
					{{ step.name }}
				</span>
			</li>
		</ul>
		<CartStep1 />
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	middleware: ['auth'],
});
const steps = ref([
	{ index: 1, name: '我的購物車' },
	{ index: 2, name: '訂購與付款資料' },
	{ index: 3, name: '訂單完成' },
]);

const currentStep = ref(1);


</script>

<style scoped></style>
