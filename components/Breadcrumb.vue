<template>
	<ul class="flex flex-wrap gap-2 my-3 md:my-5">
		<li>
			<nuxt-link to="/">
				<font-awesome-icon :icon="['fas', 'house']" />
			</nuxt-link>
		</li>
		<li v-for="crumb in crumbs">
			<font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2" />
			<nuxt-link
				v-if="!crumb.disabled && crumb.link"
				:to="crumb.link"
				class="underline"
			>
				{{ crumb.name }}
			</nuxt-link>
			<span v-else>
				{{ crumb.name }}
			</span>
		</li>
	</ul>
</template>

<script setup lang="ts">
defineProps<{
	crumbs: Crumb[];
}>();

interface Crumb {
	name: string;
	link?: string;
	id?: string;
	disabled?: boolean;
}
</script>

<style scoped></style>
