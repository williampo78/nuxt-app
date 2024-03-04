<template>
	<ul class="flex flex-wrap gap-2 my-3">
		<li>
			<nuxt-link to="/">
				<font-awesome-icon :icon="['fas', 'house']" />
			</nuxt-link>
		</li>
		<li v-for="crumb in crumbs">
			<font-awesome-icon :icon="['fas', 'chevron-right']" class="mr-2" />
			{{ crumb.name }}
		</li>
	</ul>
</template>

<script setup lang="ts">
// import { getBreadcrumbApi } from '@/api/find';
// const route = useRoute();
// const crumbs = ref<Crumb>();

defineProps<{
	crumbs: Crumb[];
}>();

// interface Crumb {
// 	[key: string]: {
// 		id?: number;
// 		name: string;
// 		[propName: string]: any;
// 	};
// }
interface Crumb {
	name: string;
	link?: string;
	id?: string;
}

// const getBreadcrumbs = async () => {
// 	const data = await getBreadcrumbApi({ category_id: route.query.category });
// 	crumbs.value = data.result;
// };

// await getBreadcrumbs();

// watch(
//   () => route.query.category,
//   () => {
// 	getBreadcrumbs()
//   },
// );
</script>

<style scoped></style>
