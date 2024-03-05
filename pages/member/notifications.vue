<template>
	<p>
		共
		<span class="text-emerald-400">{{ messageStore.totalUnread }}</span>
		則未讀
	</p>
	<div>
		<div
			v-for="message in messageStore.messages"
			class="border-b border-gray-200 p-4"
			:class="{ 'bg-gray-100': !message.isRead }"
		>
			<div class="flex gap-4 text-sm font-medium">
				<div
					class="w-12 h-12 p-2 text-center rounded text-xs tracking-wider"
					:style="{ backgroundColor: `#${message.bgColor}` }"
				>
					{{ message.category }}
				</div>
				<div class="flex-1 flex flex-col justify-between">
					<p class="text-black">{{ message.subject }}</p>
					<p class="text-gray-400">{{ message.createdAt }}</p>
				</div>
				<button
					@click="openMessage(message.id), readMessage(message)"
					class="text-black transition-all ease-in-out"
					:class="{ '-rotate-180': message.id === openedId }"
				>
					<font-awesome-icon :icon="['fas', 'chevron-down']" />
				</button>
			</div>

			<article
				v-if="openedId === message.id"
				v-html="message.content"
				class="mt-5"
			></article>
		</div>
	</div>
</template>

<script setup lang="ts">
import { readMessageApi } from '@/api/member';

const messageStore = useMessage();
const openedId = ref<number | null>(null);

const openMessage = (id: number) => {
	if (openedId.value === id) {
		openedId.value = null;
	} else {
		openedId.value = id;
	}
};

const readMessage = async ({ id, isRead }: any) => {
	if (!isRead) {
		await readMessageApi(id);
		await messageStore.getMessages();
	}
};
</script>

<style scoped></style>
