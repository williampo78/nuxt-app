<template>
	<div
		class="flex justify-center items-center fixed w-full h-full p-10 bg-black/[0.3] z-50"
	>
		<div
			class="flex flex-col w-[600px] items-center p-4 bg-white opacity-100 rounded-2xl relative"
		>
			<button @click="modalStore.closeModal()" class="absolute right-5">
				<font-awesome-icon :icon="['fas', 'xmark']" />
			</button>
			<div
				class="flex justify-center items-center w-[62px] h-[62px] my-5 rounded-full"
				:class="{
					'bg-green-50': modalStore.status === 'success',
					'bg-red-50': modalStore.status === 'error',
				}"
			>
				<div
					class="flex justify-center items-center w-10 h-10 rounded-full"
					:class="{
						'bg-green-100': modalStore.status === 'success',
						'bg-red-100': modalStore.status === 'error',
					}"
				>
					<span
						v-if="modalStore.status === 'success'"
						class="text-green-400 text-2xl"
					>
						<font-awesome-icon :icon="['fas', 'circle-check']" />
					</span>
					<span
						v-else-if="modalStore.status === 'error'"
						class="text-red-400 text-2xl"
					>
						<font-awesome-icon :icon="['fas', 'circle-xmark']" />
					</span>
				</div>
			</div>
			<h4 class="text-2xl font-bold">驗證碼錯誤</h4>
			<p class="text-gray-500 mt-3 mb-8">驗證碼輸入錯誤，請重新輸入！</p>
			<button
				@click="modalStore.closeModal()"
				class="py-3 px-12 mb-4 text-lg text-white font-bold bg-blue-primary rounded-lg md:px-16"
				>確認</button
			>
		</div>
	</div>
</template>

<script setup>
const modalStore = useModal();
</script>

<style lang="scss" scoped></style>
