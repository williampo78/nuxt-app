<template>
	<div class="mb-6">
		<Breadcrumb :crumbs="crumbs"/>
		<div class="flex gap-4">
			<FindSidebar class="hidden md:block" />
			<div class="flex-1">
				<FindFilter />
				<FindPanel />
				<FindProducts />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { getBreadcrumbApi } from '@/api/find';

const route = useRoute();

const crumbs = ref<{ name: string; id: string; disabled?: boolean }[]>([]);

const getBreadcrumbs = async () => {

	crumbs.value = []
	const data = await getBreadcrumbApi({ category_id: route.query.category });
	const _crumbs = data.result;
	for (const i in _crumbs) {
		if (data.result[i]) {
			crumbs.value.push({ name: _crumbs[i].name, id: _crumbs[i].id });
		}
	}
};

await getBreadcrumbs();

watch(
  () => route.query.category,
  () => {
	getBreadcrumbs()
  },
);
</script>

<style scoped></style>
