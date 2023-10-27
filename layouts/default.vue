<template>
	<ModalsSimpleAlert v-if="modalStore.type === 'simple'" />
	<ModalsAlert v-if="modalStore.type === 'alert'" />
	<Header />
	<div class="min-h-[calc(100vh-287px)] md:min-h-[calc(100vh-257px)]">
		<div class="max-w-[1200px] my-0 mx-auto">
			<HomeMenu />
			<main class="px-3 my-4 flex justify-center">
				<slot />
			</main>
		</div>
	</div>
	<Footer />
</template>

<script setup>
const modalStore = useModal();
</script>

<style lang="scss" scoped></style>
