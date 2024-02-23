<template>
	<div class="w-full">
		<HomeMenu />

		<div v-if="adStore.H040.length" class="max-w-[1200px] mx-auto mt-4">
			<div class="flex gap-x-3 w-full overflow-auto">
				<Swiper
					:slides-per-view="'auto'"
					:space-between="12"
					:modules="[SwiperFreeMode]"
					:free-mode="true"
				>
					<SwiperSlide
						v-for="item in adStore.H040"
						class="max-w-[144px] md:max-w-[190px]"
					>
						<AdLink :item="item">
							<img :src="item.img_path" :alt="item.img_alt" />
						</AdLink>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
		<div v-if="adStore.H050.length" class="max-w-[1200px] mx-auto my-5">
			<div class="grid grid-cols-2 gap-4">
				<span v-for="item in adStore.H050" class="">
					<!-- <img class="rounded-2xl" src="@/assets/images/image-63.png" alt="" /> -->
					<AdLink :item="item">
						<img :src="item.img_path" :alt="item.img_alt" />
					</AdLink>
				</span>
			</div>
		</div>
		<HomeUnboxing />
		<ProductCardField />
	</div>
</template>

<script setup>
const adStore = useAds();
</script>

<style lang="scss" scoped></style>
