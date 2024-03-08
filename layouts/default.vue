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
const collectionStore = useCollection();
const messageStore = useMessage();
const cartStore = useCart();

const adStore = useAds();
const route = useRoute();
const cookieToken = useCookie('token');
const { getProductCategories } = useCategories();
const areaStore = useArea();

memberStore.setToken(cookieToken.value); //把cookie token寫進store
if (cookieToken.value) {
	memberStore.setUserInfo(); //如果有coolie有token的話取得使用者資訊
}

try {
	if (cookieToken.value) {
		// 登入狀態
		await Promise.all([
			getProductCategories(),
			areaStore.getArea(),
			adStore.getAds(),
			collectionStore.getCollections(),
			messageStore.getMessages(),
			cartStore.getCartCount(),
		]);
	} else {
		await Promise.all([
			getProductCategories(),
			areaStore.getArea(),
			adStore.getAds(),
		]);
	}
} catch (error) {
	console.log(error);
}

const scrollToTop = () => {
	window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};
</script>

<style lang="scss" scoped></style>
