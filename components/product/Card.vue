<template>
	<div class="bg-white p-4 rounded-2xl">
		<div>
			<img v-if="imgUrl" :src="imgUrl" alt="" />
			<img v-else src="@/assets/images/image-44.png" alt="" />
		</div>
		<small v-if="promotion" class="mt-4 mb-1 text-xs text-pink-secondary">
			{{ promotion }}
		</small>
		<nuxt-link :to="`/product/${id}`" class="text-sm text-gray-800 mt-2 mb-4 block md:text-base">
			{{ productName || '美強生 優兒A+成長奶粉 6罐' }}
		</nuxt-link>
		<p class="text-red md:text-xl">
			${{ formatNumberWithCommas(sellingPrice!) || 100 }}
			<sub class="text-xs text-gray-400 ml-2 line-through font-medium">
				${{ formatNumberWithCommas(listPrice!) }}
			</sub>
		</p>
		<div class="flex justify-between mt-3">
			<div class="flex gap-2 text-xs text-pink-secondary">
				<!-- <span class="py-0.5 px-1.5 border border-pink-secondary rounded"
					>折扣</span
				>
				<span class="py-0.5 px-1.5 border border-pink-secondary rounded"
					>贈</span
				> -->
				<span
					v-for="label in promotionLabels"
					:key="label"
					class="py-0.5 px-1.5 border border-pink-secondary rounded"
				>
					{{ label }}
				</span>
			</div>
			<button class="text-blue-primary">
				<font-awesome-icon
					v-if="collected"
					:icon="['fas', 'heart']"
					class="text-red"
				/>
				<font-awesome-icon v-else :icon="['far', 'heart']" />
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { formatNumberWithCommas } from '@/composables/useFormat';

const props = defineProps<{
	id?: number;
	productName?: string;
	imgUrl?: string;
	promotion?: string;
	listPrice?: number;
	sellingPrice?: number;
	collected?: boolean;
	cart?: boolean;
	promotionLabels?: string[];
}>();
</script>

<style scoped></style>
