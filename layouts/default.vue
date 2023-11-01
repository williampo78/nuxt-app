<template>
	<ModalsSimpleAlert v-if="modalStore.type === 'simple'" />
	<ModalsAlert v-if="modalStore.type === 'alert'" />
	<Header />
	<div class="min-h-[calc(100vh-287px)] md:min-h-[calc(100vh-257px)] font-bold">
		<main
			class="px-3 flex justify-center"
			:class="{ 'px-0': route.path === '/' }"
		>
			<slot />
		</main>
	</div>
	<Footer />
</template>

<script setup>
const modalStore = useModal();
const route = useRoute();
</script>

<style lang="scss" scoped></style>
