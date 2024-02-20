<template>
	<Header />
	<Nav />
	<div
		class="max-w-[1200px] mx-auto flex flex-col gap-4 items-center font-bold my-8 md:flex-row md:gap-10"
		:class="{ 'md:flex-row-reverse': error?.statusCode === 404 }"
	>
		<div class="flex-1 text-center">
			<h1 class="text-blue-primary text-xl mb-3 md:text-4xl md:mb-4">
				{{
					error?.statusCode === 404
						? 'Error: 404 Page Not Found'
						: 'Error: 500 Internal Server Error'
				}}
			</h1>
			<p class="text-gray-500 mb-6 md:text-3xl md:mb-8">
				{{ error?.statusCode === 404 ? '無法找到該頁面' : '伺服器發生錯誤' }}
			</p>
			<nuxt-link class="btn btn-confirm inline-block md:text-xl" to="/">
				返回首頁
			</nuxt-link>
		</div>
		<div class="p-4 md:max-w-[480px]">
			<img
				v-if="error?.statusCode === 404"
				src="/images/error-404.svg"
				alt="找不到頁面"
			/>
			<img v-else src="/images/error-500.svg" alt="伺服器錯誤" />
		</div>
	</div>
	<Footer />
</template>
<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
	error: Object as () => NuxtError,
});
</script>

<style scoped>
.button {
	padding: 4px 6px;
	margin: 10px 0px;
	background: black;
	color: white;
}
</style>
