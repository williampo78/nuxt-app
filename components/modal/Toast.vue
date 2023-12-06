<template>
	<div
		class="flex justify-center items-center fixed w-full h-full bg-black/[0.3] z-50"
	>
		<div
			class="flex flex-col min-w-[144px] items-center py-6 px-8 gap-5 bg-white opacity-100 rounded-2xl"
		>
			<ModalIcon />
			<p class="text-xl font-bold">{{ modalStore.message }}</p>
		</div>
	</div>
</template>

<script setup>
const modalStore = useModal();
</script>

<style lang="scss" scoped></style>
