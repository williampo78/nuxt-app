<template>
	<li
		v-for="point in list"
		:key="point.id"
		class="grid grid-cols-2 gap-y-1 py-2 border-b border-gray-300 text-xs font-medium md:text-base md:grid-cols-4"
	>
		<div class="text-emerald-400 md:text-center md:order-2">
			{{ point.orderId }}
		</div>
		<div class="text-black text-right md:text-center md:order-3">
			<span
				v-if="tabIndex === 0"
				:class="{
					'text-sky-300': point.point > 0,
					'text-red': point.point <= 0,
				}"
			>
				{{ point.point >= 0 ? `+${point.point}` : point.point }}
			</span>
			<span v-else class="text-red">
				{{ point.point }}
			</span>
			點
		</div>
		<div class="tracking-widest md:text-center md:order-1">
			<span>
				{{ dayjs(point.createdAt).format('YYYY/MM/DD') }}
			</span>
			<span class="hidden text-gray-400 ml-2 md:inline">
				{{ dayjs(point.createdAt).format('HH:mm') }}
			</span>
		</div>
		<div class="tracking-widest text-right md:text-center md:order-4">
			{{ point.expiresAt || '-' }}
		</div>
	</li>
</template>

<script setup lang="ts">
import { PointDetail } from '@/types/member';
import dayjs from 'dayjs';

interface Props {
	list: PointDetail[];
	tabIndex: number;
}
const props = withDefaults(defineProps<Props>(), {
	list: (): PointDetail[] => [],
	tabIndex: 0,
});
</script>

<style scoped></style>
