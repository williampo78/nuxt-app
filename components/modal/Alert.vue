<template>
	<div
		class="flex justify-center items-center fixed w-full h-full p-10 bg-black/[0.3] z-50"
	>
		<div
			class="flex flex-col w-[600px] items-center p-4 bg-white opacity-100 rounded-2xl"
		>
			<div class="w-full flex justify-end mb-4">
				<button @click="modalStore.closeModal()">
					<font-awesome-icon :icon="['fas', 'xmark']" />
				</button>
			</div>
			<ModalIcon />
			<h4 class="text-2xl font-bold">{{ modalStore.title }}</h4>
			<p class="text-gray-500 mt-3 mb-8">{{ modalStore.message }}</p>
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
