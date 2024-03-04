<template>
	<div class="my-4 md:my-8">
		<h1
			class="text-lg text-center border-b-4 border-blue-primary pb-3 mb-4 md:mb-6 md:text-2xl"
			>{{ footerStore.title }}
		</h1>

		<div v-html="content"></div>
	</div>
</template>

<script setup lang="ts">
import { getFooterContentApi } from '@/api/footer';
const route = useRoute()

const footerStore = useFooter();

const title = ref<string>('');
const content = ref<string>('');

onMounted(async () => {
	await nextTick();
	const data = await getFooterContentApi(route.params.id);
	title.value = data.result[0].content_name;
	content.value = data.result[0].content_text;
});
</script>

<style scoped></style>
