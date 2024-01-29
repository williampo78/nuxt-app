<template>
	<div
		class="flex justify-center items-center fixed w-full h-full bg-black/[0.3] z-50"
	>
		<div
			class="flex flex-col min-w-[144px] items-center py-6 px-8 gap-5 bg-white opacity-100 rounded-2xl"
		>
			<div
				class="flex justify-center items-center w-[62px] h-[62px] rounded-full"
				:class="{
					'bg-green-50': modalStore.icon === 'success',
					'bg-red-50': modalStore.icon === 'error',
				}"
			>
				<div
					class="flex justify-center items-center w-10 h-10 rounded-full"
					:class="{
						'bg-green-100': modalStore.icon === 'success',
						'bg-red-100': modalStore.icon === 'error',
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
				</div>
			</div>
			<p class="text-xl font-bold">{{ modalStore.message }}</p>
		</div>
	</div>
</template>

<script setup>
const modalStore = useModal();
</script>

<style lang="scss" scoped></style>
