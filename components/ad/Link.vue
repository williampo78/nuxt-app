<template>
	<span>
		<template v-if="item.action === 'C'">
			<NuxtLink
				:to="{
					path: '/find/category',
					query: { category: item.targetId },
				}"
				:target="item.targetBlank ? '_blank' : '_self'"
			>
				<slot></slot>
			</NuxtLink>
		</template>
		<template v-else-if="item.action === 'M'">
			<NuxtLink
				:to="{
					path: `/campaign/${item.campaignUrl}`,
					query: { eventId: item.targetCampaign },
				}"
				:target="item.targetBlank ? '_blank' : '_self'"
			>
				<slot></slot>
			</NuxtLink>
		</template>
		<template v-else-if="item.action === 'U'">
			<a
				:href="item.url ? item.url : ''"
				:target="item.targetBlank ? '_blank' : '_self'"
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
defineProps<{
	item: {
		action?: 'U' | 'C' | 'X' | 'P'| 'M';
		targetId?: null | number;
		targetBlank?: 0 | 1;
		campaignUrl?: string;
		targetCampaign?: string;
		url?:string
	};
}>();
</script>

<style scoped></style>
