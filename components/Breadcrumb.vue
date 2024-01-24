<template>
	<ul class="flex gap-2 my-3">
		<li>
			<NuxtLink to="/">
				<font-awesome-icon :icon="['fas', 'house']" />
			</NuxtLink>
		</li>
		<li v-for="crumb in crumbs">
			<font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2"/>
			{{ crumb.name }}
		</li>
	</ul>
</template>

<script setup lang="ts">
import { getBreadcrumbApi } from '@/api/find';
const route = useRoute();
const crumbs = ref<Crumb>();

interface Crumb {
	[key: string]: {
		id: number;
		name: string;
		[propName: string]: any;
	};
}

const getBreadcrumbs = async () => {
	const data = await getBreadcrumbApi({ category_id: route.query.category });
	console.log(data.result);
	crumbs.value = data.result;
	console.log(crumbs.value);
};

getBreadcrumbs();
</script>

<style scoped></style>
