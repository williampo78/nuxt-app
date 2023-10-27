<template>
	<ModalsSimpleAlert v-if="modalStore.type === 'simple'" />
	<ModalsAlert v-if="modalStore.type === 'alert'" />
	<div class="min-h-[calc(100vh-219px)] md:min-h-[calc(100vh-257px)]">
		<Header />
		<main class="px-3 my-4 flex justify-center">
			<slot />
		</main>
		<!-- <div>This is the layout of the whole app</div> -->
	</div>
	<Footer />
</template>

<script setup>
const modalStore = useModal();
</script>

<style lang="scss" scoped></style>
