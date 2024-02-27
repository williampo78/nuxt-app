<template>
	<Swiper
		:slides-per-view="'auto'"
		:space-between="12"
		:modules="[SwiperFreeMode]"
		:free-mode="true"
		class="w-full"
	>
		<SwiperSlide v-for="(item, index) in items" :key="index">
			<img
				class="w-[140px] h-[140px] md:max-w-[170px] md:max-h-[170px]"
				:src="item.img_path ? item.img_path : ''"
				:alt="item.img_alt ? item.img_alt : `圖片${index + 1}`"
			/>
			<div class="flex-1">
				<p class="text-blue-primary">{{ item.img_title }}</p>
				<p class="text-xs text-gray-400 my-4 font-medium">
					{{ item.img_abstract }}
				</p>
				<button
					class="py-1.5 px-3 bg-blue-primary text-white text-xs rounded-full"
				>
					<AdLink
						:item="{
							action: item.see_more_action,
							targetId: item.see_more_cate_hierarchy_id,
							targetBlank: item.see_more_target_blank,
							url:item.url
						}"
					>
						more<font-awesome-icon
							class="ml-1"
							:icon="['fas', 'arrow-right']"
						/>
					</AdLink>
				</button>
			</div>
		</SwiperSlide>
	</Swiper>
</template>

<script setup lang="ts">
import { ImageSlot } from '~/types/ads';
defineProps<{
	items: ImageSlot[];
}>();
</script>

<style scoped lang="scss">
.swiper-slide {
	@apply max-w-[390px] p-4 bg-yellow-forth flex gap-x-4 rounded-2xl;
}
</style>
