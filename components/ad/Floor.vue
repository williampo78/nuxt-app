<template>
	<div class="bg-[#FFF8E9] py-6 px-3 md:mx-[-12px]">
		<div class="max-w-[1200px] mx-auto">
			<div class="flex justify-between text-orange-primary">
				<h2 class="text-2xl mb-3">
					<font-awesome-icon v-if="icon" class="mr-3" :icon="['fas', icon]" />
					{{ title }}
				</h2>
				<AdLink v-if="seeMore" :item="seeMore">
					查看更多 <font-awesome-icon :icon="['fas', 'chevron-right']" />
				</AdLink>
			</div>
			<div class="flex gap-3 justify-between w-full overflow-auto">
				<Swiper
					:slides-per-view="'auto'"
					:space-between="12"
					:modules="[SwiperFreeMode]"
					:free-mode="true"
				>
					<SwiperSlide v-for="i in 6">
						<ProductCard />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		title: string;
		icon: string;
		seeMore?: {
			img_action: 'U' | 'C' | 'X' | 'P' | 'M';
			url: string;
			targetId: number;
			targeBlank?: 0 | 1;
		};
	}>(),
	{
		//default values
		title: '嗨',
		icon: '',
	}
);
</script>

<style scoped>
.swiper-slide {
	max-width: 200px;
}
</style>
