<template>
	<NuxtPage />
</template>

<script setup lang="ts">
definePageMeta({
	middleware: ['auth'],
});
const { getRecipients } = useRecipients();
const recipientStore = useRecipient();

//沒有常用收件人資料才打API
if (!recipientStore.recipients.length) {
	await getRecipients();
}
</script>

<style scoped></style>
