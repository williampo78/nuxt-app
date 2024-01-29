<template>
	<div class="sticky top-0 z-10">
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
					<NuxtLink :to="'/'" class="max-w-[180px]">
						<!-- <picture>
            <source media="(min-width:992px )" srcset="@/assets/images/logo@2x.png" sizes="" />
            <img src="@/assets/images/logo.svg" alt="" />
          </picture> -->
						<img
							class="w-[95px] md:w-[210px]"
							src="@/assets/images/logo.png"
							alt=""
						/>
					</NuxtLink>
				</div>
				<div>
					<div
						class="hidden w-[500px] h-10 flex-shrink md:flex items-center bg-white p-1 border-2 border-blue-primary rounded-lg"
					>
						<input
							class="flex-1 border-r border-black outline-none mr-1"
							type="text"
							placeholder="輸入想搜尋的商品"
						/>
						<font-awesome-icon :icon="['fas', 'magnifying-glass']" />
						<span class="w-8 mx-2">搜尋</span>
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
								<NuxtLink to="/member/center"> {{ memberStore.memberInfo.name }}, 您好 </NuxtLink>
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
											<NuxtLink
												:to="option.path"
												class="hover:bg-gray-100 block p-1.5"
											>
												{{ option.name }}
											</NuxtLink>
										</li>
									</ul>
								</div>
							</div>
						</template>
						<template v-else>
							<NuxtLink :to="'/login'" class="pr-2 border-r mr-2">
								會員登入</NuxtLink
							>
							<NuxtLink class="mr-4" to="/register">註冊</NuxtLink>
						</template>
						<NuxtLink to="/">
							<span>
								<font-awesome-icon :icon="['fas', 'cart-shopping']" />
							</span>
							購物車
						</NuxtLink>
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

const memberCenterOptions = ref<{ name: string; path: string }[]>([
	{ name: '訂單查詢', path: '' },
	{ name: '我的點數', path: '/member/points' },
	{ name: '我的收藏', path: '' },
	{ name: '我的資料', path: '' },
	{ name: '常用收件人', path: '' },
	{ name: '我的通知', path: '' },
	{ name: '登出', path: '/' },
]);
</script>

<style lang="scss" scoped></style>
