<template>
	<div class="w-full">
		<HomeMenu />

		<div v-if="adStore.ads.H040" class="max-w-[1200px] mx-auto mt-4">
			<div class="flex gap-x-3 w-full overflow-auto">
				<Swiper
					:slides-per-view="'auto'"
					:space-between="12"
					:modules="[SwiperFreeMode]"
					:free-mode="true"
				>
					<SwiperSlide
						v-for="item in adStore.ads.H040"
						class="max-w-[144px] md:max-w-[190px]"
					>
						<AdLink :item="item">
							<img :src="item.img_path" :alt="item.img_alt" />
						</AdLink>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
		<div v-if="adStore.ads.H050" class="max-w-[1200px] mx-auto my-5">
			<div class="grid grid-cols-2 gap-4">
				<span v-for="item in adStore.ads.H050" class="">
					<AdLink :item="item">
						<img :src="item.img_path" :alt="item.img_alt" />
					</AdLink>
				</span>
			</div>
		</div>
		<AdFloor
			v-if="hotToday"
			title="今日最熱銷"
			icon="fire"
			:seeMore="{ action: hotToday.see_more_action, url: hotToday.url,targetId:hotToday.see_more_cate_hierarchy_id }"
		/>

		<HomeUnboxing />
	</div>
</template>

<script setup>
const adStore = useAds();

const hotToday = computed(() => {
	return adStore.ads.H060;
});
</script>

<style lang="scss" scoped></style>
