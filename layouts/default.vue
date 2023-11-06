<template>
	<ModalsSimpleAlert v-if="modalStore.type === 'simple'" />
	<ModalsAlert v-if="modalStore.type === 'alert'" />
	<Header />
	<Menu />
	<div class="min-h-[calc(100vh-287px)] md:min-h-[calc(100vh-257px)] font-bold">
		<main
			class="px-3 flex justify-center"
			:class="{ 'px-0': route.path === '/' }"
		>
			<slot />
		</main>
	</div>
	<Footer />
	<button
		@click="scrollToTop"
		class="w-[50px] h-[50px] text-white flex flex-col justify-center items-center rounded-full bg-blue-primary border-2 border-white bottom-10 right-10 fixed z-20"
	>
		<span class="text-sm"
			><font-awesome-icon :icon="['fas', 'chevron-up']"
		/></span>
		<span class="text-xs">TOP</span>
	</button>
</template>

<script setup>
const modalStore = useModal();
const route = useRoute();

const scrollToTop = () => {
	window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};
</script>

<style lang="scss" scoped></style>
