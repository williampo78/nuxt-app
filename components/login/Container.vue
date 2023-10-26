<template>
	<div
		class="w-[794px] flex justify-center items-center bg-gray-50 rounded-lg font-bold py-6 px-4 md:py-16 text-blue-primary"
	>
		<form @submit.prevent class="max-w-[538px] flex-1">
			<h2 class="text-center text-2xl text-black mb-6 md:mb-4">
				<slot name="title"></slot>
			</h2>
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
</template>

<script setup></script>

<style lang="scss" scoped></style>
