<template>
	<div
		class="flex justify-center items-center w-[62px] h-[62px] rounded-full mb-5"
		:class="{
			'bg-green-50': modalStore.icon === 'success',
			'bg-red-50': modalStore.icon === 'error',
			'bg-amber-50': modalStore.icon === 'warning',
		}"
	>
		<div
			class="flex justify-center items-center w-10 h-10 rounded-full"
			:class="{
				'bg-green-100': modalStore.icon === 'success',
				'bg-red-100': modalStore.icon === 'error',
				'bg-amber-100': modalStore.icon === 'warning',
			}"
		>
			<span
				v-if="modalStore.icon === 'success'"
				class="text-green-400 text-2xl"
			>
				<font-awesome-icon :icon="['fas', 'circle-check']" />
			</span>
			<span
				v-else-if="modalStore.icon === 'error'"
				class="text-red-400 text-2xl"
			>
				<font-awesome-icon :icon="['fas', 'circle-xmark']" />
			</span>
			<span
				v-else-if="modalStore.icon === 'warning'"
				class="text-amber-400 text-2xl"
			>
				<font-awesome-icon :icon="['fas', 'circle-exclamation']" />
			</span>
		</div>
	</div>
</template>

<script setup>
const modalStore = useModal();
</script>

<style lang="scss" scoped></style>
