<template>
	<div class="w-[794px] font-bold md:mb-10">
		<div
			v-if="route.name === 'login' || route.name === 'register'"
			class="flex border-b-4 border-blue-primary text-center text-lg md:text-2xl md:my-10"
		>
			<NuxtLink
				:to="{ name: 'login' }"
				class="flex-1 bg-blue-primary py-2 rounded-t-xl cursor-pointer"
				:class="{
					'text-gray-100 bg-blue-primary': route.name === 'login',
					'bg-gray-100 text-blue-primary': route.name === 'register',
				}"
			>
				會員登入
			</NuxtLink>
			<NuxtLink
				:to="{ name: 'register' }"
				class="flex-1 py-2 rounded-t-xl cursor-pointer"
				:class="{
					'text-gray-100 bg-blue-primary': route.name === 'register',
					'bg-gray-100 text-blue-primary': route.name === 'login',
				}"
				>會員註冊</NuxtLink
			>
		</div>
		<div
			class="flex justify-center bg-gray-50 rounded-lg md:rounded-2xl mt-2 md:mt-10 px-4"
		>
			<form
				@submit.prevent
				class="max-w-[538px] flex flex-col gap-1 pt-6 pb-[25px] text-blue-primary flex-1 md:py-16"
				action=""
			>
				<slot name="title"></slot>

				<slot name="message"></slot>

				<slot name="input-field"> </slot>

				<button
					class="bg-blue-primary text-white rounded w-full h-[52px] mt-[30px] mb-[15px] text-lg md:text-2xl"
				>
					<slot name="button"></slot>
				</button>
				<slot name="bottom-message"></slot>
			</form>
		</div>
	</div>
</template>

<script setup>
const route = useRoute();
</script>

<style lang="scss" scoped>

</style>
