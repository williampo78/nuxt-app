<template>
	<div
		v-if="modalStore.modalShow && modalStore.type === 'custom'"
		class="flex justify-center items-center fixed top-0 left-0 w-full h-full p-10 bg-black/[0.3] z-50"
	>
		<div
			class="w-[600px] bg-white opacity-100 rounded-2xl relative overflow-hidden"
		>
			<div
				v-if="modalStore.hasHeader"
				class="w-full flex justify-between bg-emerald-400 text-white px-4 py-2"
			>
				<h2 class="text-xl">
					{{ modalStore.title }}
				</h2>
				<button @click="modalStore.closeModal()">
					<font-awesome-icon :icon="['fas', 'xmark']" />
				</button>
			</div>
			<div class="flex flex-col items-center p-4 pb-6">
				<div v-if="!modalStore.hasHeader" class="flex w-full justify-end">
					<button @click="modalStore.closeModal()">
						<font-awesome-icon :icon="['fas', 'xmark']" />
					</button>
				</div>
				<slot name="content">
					<ModalIcon />
					<h4 class="text-2xl font-bold">{{ modalStore.title }}</h4>
					<p class="text-gray-500 mt-3 mb-8">{{ modalStore.message }}</p>
				</slot>
				<slot name="buttons">
					<button @click="modalStore.closeModal()" class="btn btn-confirm w-48"
						>確認</button
					>
				</slot>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const modalStore = useModal();
</script>

<style scoped></style>
