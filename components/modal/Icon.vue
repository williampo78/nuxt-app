<template>
	<div
		class="flex justify-center items-center w-[62px] h-[62px] rounded-full mb-5"
		:class="{
			'bg-green-50': bgGreen,
			'bg-red-50': bgRed,
			'bg-amber-50': bgYellow,
		}"
	>
		<div
			class="flex justify-center items-center w-10 h-10 rounded-full"
			:class="{
				'bg-green-100': bgGreen,
				'bg-red-100': bgRed,
				'bg-amber-100': bgYellow,
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
			<span
				v-else-if="modalStore.icon === 'collect'"
				class="text-green-400 text-2xl"
			>
				<font-awesome-icon :icon="['fas', 'heart-circle-plus']" />
			</span>
			<span
				v-else-if="modalStore.icon === 'uncollect'"
				class="text-red-400 text-2xl"
			>
				<font-awesome-icon :icon="['fas', 'heart-circle-minus']" />
			</span>
			<span
				v-else-if="modalStore.icon === 'cart-add'"
				class="text-green-400 text-2xl"
			>
			<font-awesome-icon :icon="['fas', 'cart-plus']" />
			</span>
		</div>
	</div>
</template>

<script setup>
const modalStore = useModal();

const bgGreen = computed(() => {
	return modalStore.icon === 'success' || modalStore.icon === 'collect';
});
const bgRed = computed(() => {
	return modalStore.icon === 'error' || modalStore.icon === 'uncollect';
});
const bgYellow = computed(() => {
	return modalStore.icon === 'warning';
});
</script>

<style lang="scss" scoped></style>
