<template>
	<div
		class="sticky top-0 z-10"
		@click="clickOutside(() => (showSearchHistory = false))"
	>
		<div
			class="bg-blue-fifth flex justify-center py-2 px-5 md:p-0 text-blue-primary font-bold relative md:min-h-[120px]"
		>
			<div
				class="flex justify-between items-center w-full md:max-w-[1200px] z-[1]"
			>
				<div class="flex items-center gap-x-[10px] md:py-4">
					<span
						v-if="!menuStore.menuShow"
						@click="menuStore.openMenu()"
						class="text-[22px] w-5 md:hidden"
					>
						<font-awesome-icon :icon="['fas', 'bars']" />
					</span>
					<span
						v-else
						@click="menuStore.closeMenu()"
						class="text-[22px] w-5 md:hidden"
					>
						<font-awesome-icon :icon="['fas', 'xmark']" />
					</span>
					<nuxt-link :to="'/'" class="max-w-[180px]">
						<img
							class="w-[95px] md:w-[210px]"
							src="@/assets/images/logo.png"
							alt=""
						/>
					</nuxt-link>
				</div>
				<div>
					<div
						class="relative hidden w-[500px] h-10 flex-shrink md:flex items-center bg-white p-1 border-2 border-blue-primary rounded-lg"
					>
						<input
							@click.stop="showSearchHistory = true"
							@keydown.enter="search()"
							v-model="keyword"
							class="flex-1 outline-none mr-1 pl-3"
							type="text"
							placeholder="輸入想搜尋的商品"
							id="search"
						/>

						<button
							@click="search()"
							class="mx-2 flex items-center gap-1"
							aria-label="搜尋"
						>
							<font-awesome-icon :icon="['fas', 'magnifying-glass']" />
							搜尋
						</button>
						<FindHistory v-if="showSearchHistory" />
					</div>
					<ul class="hidden md:flex gap-1 text-sm mt-1">
						<li>益生菌</li>
						<li>益生菌</li>
						<li>益生菌</li>
					</ul>
				</div>
				<div class="flex items-center justify-end gap-x-2">
					<div class="flex items-center gap-5 md:hidden text-xl">
						<font-awesome-icon :icon="['fas', 'magnifying-glass']" />
						<font-awesome-icon :icon="['fa-solid', 'fa-user']" />
						<font-awesome-icon :icon="['fas', 'cart-shopping']" />
					</div>
					<div class="hidden md:flex items-center flex-shrink-0">
						<span class="mr-2">
							<font-awesome-icon :icon="['fa-solid', 'fa-user']" />
						</span>
						<template v-if="memberStore.token && memberStore.memberInfo.name">
							<div class="mr-4 cursor-pointer relative group">
								<nuxt-link to="/member/center">
									{{ memberStore.memberInfo.name }}, 您好
								</nuxt-link>
								<div
									class="group-hover:block hidden absolute text-sm font-medium text-gray-500 w-28"
								>
									<ul
										class="bg-white border-2 border-emerald-400 relative before:absolute before:left-[5.5px] before:bottom-full before:border-4 before:border-transparent before:z-50 before:border-b-white"
									>
										<li
											v-for="option in memberCenterOptions"
											:key="option.name"
											class="border-b border-gray-100 last:border-0"
										>
											<button
												@click="logOut()"
												v-if="option.name === '登出'"
												class="hover:bg-gray-100 block w-full text-left p-1.5"
											>
												登出
											</button>
											<nuxt-link
												v-else
												:to="option.path"
												class="hover:bg-gray-100 block p-1.5"
											>
												{{ option.name }}
											</nuxt-link>
										</li>
									</ul>
								</div>
							</div>
						</template>
						<template v-else>
							<nuxt-link :to="'/login'" class="pr-2 border-r mr-2">
								會員登入</nuxt-link
							>
							<nuxt-link class="mr-4" to="/register">註冊</nuxt-link>
						</template>
						<nuxt-link to="/cart">
							<span class="relative">
								<font-awesome-icon :icon="['fas', 'cart-shopping']" />
								<span
									v-if="cartStore.count > 0"
									class="absolute bottom-[50%] left-[50%] w-4 h-4 bg-red rounded-full flex justify-center items-center text-[10px] text-white"
								>
									{{ cartStore.count }}
								</span>
							</span>
							購物車
						</nuxt-link>
					</div>
				</div>
			</div>
			<img
				class="hidden md:block absolute right-0 z-0"
				src="@/assets/images/homepage-right-top.png"
				alt=""
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
const menuStore = useMenu();
const memberStore = useMember();
const cartStore = useCart();
const router = useRouter();
const route = useRoute();
const { clickOutside } = useClickOutside();
const { logOut } = useLogOut();

const keyword = ref<string>('');
const showSearchHistory = ref<boolean>(false);

const memberCenterOptions = ref<{ name: string; path: string }[]>([
	{ name: '訂單查詢', path: '' },
	{ name: '我的點數', path: '/member/points' },
	{ name: '我的收藏', path: '/member/collection' },
	{ name: '我的資料', path: '/member/info' },
	{ name: '常用收件人', path: '/member/recipients' },
	{ name: '我的通知', path: '/member/notifications' },
	{ name: '登出', path: '/' },
]);

const search = () => {
	const keywordQuery = keyword.value.trim();
	router.push({ path: '/find', query: { keyword: keywordQuery } });
	storeSearchHistory();
	keyword.value = '';
};

const storeSearchHistory = () => {
	const JSONHistory = localStorage.getItem('searchHistory');
	let parsedHistory = [];
	if (JSONHistory) {
		parsedHistory = JSON.parse(JSONHistory);
	}
	parsedHistory.push(keyword.value);

	if (parsedHistory.length > 5) {
		parsedHistory.shift();
	}
	localStorage.setItem('searchHistory', JSON.stringify(parsedHistory));
};

watch(
	() => route.query,
	() => {
		showSearchHistory.value = false;
	}
);
</script>

<style lang="scss" scoped></style>
