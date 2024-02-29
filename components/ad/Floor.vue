<template>
	<div class="py-6 px-3 md:-mx-4" :class="[bgColor]">
		<div class="max-w-[1200px] mx-auto">
			<div class="flex justify-between" :class="[titleColor]">
				<h2 class="text-lg mb-3 md:text-2xl">
					<font-awesome-icon v-if="icon" class="mr-3" :icon="['fas', icon]" />
					{{ title }}
				</h2>
				<AdLink
					v-if="seeMore?.img_action && seeMore?.img_action !== 'X'"
					:item="seeMore"
				>
					查看更多 <font-awesome-icon :icon="['fas', 'chevron-right']" />
				</AdLink>
			</div>
			<div class="flex ">
				<slot>
					<Swiper
						v-if="swiper"
						:slides-per-view="'auto'"
						:space-between="12"
						:modules="[SwiperFreeMode]"
						:free-mode="true"
					>
						<SwiperSlide v-if="images?.length" class="!max-w-[360px]">
							<AdLink
								:item="{
									action: images[0].img_action,
									targetId: images[0].target_blank,
								}"
							>
								<img :src="images[0].img_path" alt="" class="h-full" />
							</AdLink>
						</SwiperSlide>

						<SwiperSlide v-for="product in products" :key="product.product_id">
							<ProductCard
								:id="product.product_id"
								:product-name="product.product_name"
								:img-url="product.product_photo"
								:promotion="product.promotion_desc"
								:list-price="product.list_price"
								:selling-price="product.selling_price"
								:collected="product.collection"
								:promotion-labels="product.promotion_label"
							/>
						</SwiperSlide>
					</Swiper>
				</slot>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Product, Image } from '@/types/ads';
withDefaults(
	defineProps<{
		title: string;
		icon: string;
		titleColor?: string;
		bgColor?: string;
		seeMore?: {
			img_action: 'U' | 'C' | 'X' | 'P' | 'M';
			url: string;
			targetId: number;
			targeBlank?: 0 | 1;
		};
		swiper?: boolean;
		products?: Product[];
		images?: Image[];
	}>(),
	{
		//default values
		swiper: true,
		bgColor: 'bg-white',
		titleColor: 'text-gray-800',
	}
);
</script>

<style scoped>
.swiper{
	@apply mx-0
}
.swiper-slide {
	@apply max-w-[220px];
}
</style>
