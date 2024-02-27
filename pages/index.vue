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
		<div
			v-if="adStore.ads.H050"
			class="max-w-[1200px] mx-auto my-5 overflow-auto"
		>
			<div
				class="grid grid-cols-[repeat(2,350px)] gap-3 md:grid-cols-2 md:gap-4"
			>
				<span v-for="item in adStore.ads.H050" class="">
					<AdLink :item="item">
						<img :src="item.img_path" :alt="item.img_alt" />
					</AdLink>
				</span>
			</div>
		</div>
		<AdFloor
			v-if="H060"
			title="今日最熱銷"
			icon="fire"
			:see-more="{
				action: H060.see_more_action,
				url: H060.url,
				targetId: H060.see_more_cate_hierarchy_id,
			}"
			swiper
			:products="H060.products"
			:title-color="'text-[#FF9D21]'"
			:bg-color="'bg-[#FFF7E5]'"
		/>
		<AdFloor
			v-if="H080B"
			title="春天藥局"
			icon="store"
			:see-more="{
				action: H080B.see_more_action,
				url: H080B.url,
				targetId: H080B.see_more_cate_hierarchy_id,
			}"
			:products="H080B.products"
			:images="H080B.images"
			:title-color="'text-[#02BE96]'"
			:bg-color="'bg-[#E5F7F4]'"
			class="hidden md:block"
		/>
		<AdFloor v-if="H110" title="好文開箱" icon="pen-nib">
			<HomeUnboxing :items="H110" />
		</AdFloor>
		<AdFloor
			v-if="H120"
			title="量身推薦"
			icon="medal"
			:bg-color="'bg-[#F1F9E9]'"
			:title-color="'text-[#75C82B]'"
		>
			<Swiper
				:slides-per-view="'auto'"
				:space-between="12"
				:modules="[SwiperFreeMode]"
				:free-mode="true"
			>
				<SwiperSlide
					v-for="(item, index) in H120"
					:key="index"
					class="max-w-[220px]"
				>
					<AdLink :item="item">
						<div class="flex justify-center rounded-2xl mb-2">
							<img
								:src="item.img_path"
								:title="item.img_title"
								:alt="item.img_alt"
							/>
						</div>
						<span
							v-if="item.img_title"
							class="text-product-title text-center text-sm block font-bold"
							>{{ item.img_title.slice(0, 10) }}</span
						>
					</AdLink>
				</SwiperSlide>
			</Swiper>
		</AdFloor>
		<AdFloor
			v-if="H130"
			title="猜你喜歡"
			icon="heart-circle-check"
			:see-more="{
				action: H130.see_more_action,
				url: H130.url,
				targetId: H130.see_more_cate_hierarchy_id,
			}"
			swiper
			:products="H130.products"
			:title-color="'text-[#EA861C]'"
			:bg-color="'bg-[#FFF7E5]'"
		/>
	</div>
</template>

<script setup>
const adStore = useAds();

const H060 = computed(() => {
	return adStore.ads.H060;
});
const H080B = computed(() => {
	return adStore.ads.H080B;
});
const H110 = computed(() => {
	return adStore.ads.H110;
});
const H120 = computed(() => {
	return adStore.ads.H120;
});
const H130 = computed(() => {
	return adStore.ads.H130;
});
</script>

<style lang="scss" scoped></style>
