<template>
	<div class="my-4 md:my-6">
		<Breadcrumb :crumbs="[{ name: title }]" v-if="!route.path.includes('qa')" />

		<div class="flex gap-x-12">
			<MemberMenu v-if="route.path.includes('qa')" />
			<div class="flex-1">
				<h1
					class="text-lg text-center border-b-4 border-blue-primary pb-3 mb-4 md:mb-6 md:text-2xl"
					>{{ title }}
				</h1>

				<div v-if="route.path.includes('qa')"> <QA /> </div>
				<div v-if="content" v-html="content"></div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { getFooterContentApi } from '@/api/footer';

const route = useRoute();

const title = ref<string>('');
const content = ref<string>('');

onMounted(async () => {
	await nextTick();
	if (route.params.id === 'hit-me') {
		title.value = '與我們聯繫';
		return;
	} else if (route.params.id === 'qa') {
		title.value = '常見問題';
		return;
	}
	const data = await getFooterContentApi(route.params.id);
	title.value = data.result[0].content_name;
	content.value = data.result[0].content_text;
});
</script>

<style scoped></style>
