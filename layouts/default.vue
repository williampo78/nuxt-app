<template>
	<ModalToast v-if="modalStore.modalShow && modalStore.type === 'toast'" />
	<ModalAlert v-if="modalStore.modalShow && modalStore.type === 'alert'" />
	<Header />
	<Nav />
	<Menu />
	<div
		class="min-h-[calc(100vh-287px)] md:min-h-[calc(100vh-257px)] font-bold text-blue-primary px-4"
	>
		<main
			class="max-w-[1200px] mx-auto"
			:class="{ 'px-0 flex justify-center max-w-none': route.path === '/' }"
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
const memberStore = useMember();
const route = useRoute();
const tokenCookie = useCookie('token')
const { getProductCategories } = useCategories();
const areaStore = useArea()

await getProductCategories();
await areaStore.getArea()

memberStore.setToken(tokenCookie.value); //把cookie token寫進store
if(tokenCookie.value){
	memberStore.setUserInfo(); //如果有coolie有token的話取得使用者資訊
}

const scrollToTop = () => {
	window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};
</script>

<style lang="scss" scoped></style>
