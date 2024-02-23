<template>
	<span>
		<template v-if="item.img_action === 'C'">
			<NuxtLink
				:to="{
					path: '/find/category',
					query: { category: item.target_cate_hierarchy },
				}"
				:target="item.target_blank ? '_blank' : '_self'"
			>
				<slot></slot>
			</NuxtLink>
		</template>
		<template v-else-if="item.img_action === 'M'">
			<NuxtLink
				:to="{
					path: `/campaign/${item.campaign_url_code}`,
					query: { eventId: item.target_campaign },
				}"
				:target="item.target_blank ? '_blank' : '_self'"
			>
				<slot></slot>
			</NuxtLink>
		</template>
		<template v-else-if="item.img_action === 'U'">
			<a
				:href="item.url ? item.url : ''"
				:target="item.target_blank ? '_blank' : '_self'"
			>
				<slot></slot>
			</a>
		</template>
		<template v-else>
			<slot></slot>
		</template>
	</span>
</template>

<script setup lang="ts">
import { TextSlot, ImageSlot } from '@/types/ads';
const props = defineProps<{
	item: TextSlot | ImageSlot;
}>();
</script>

<style scoped></style>
