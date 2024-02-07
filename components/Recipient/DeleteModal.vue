<template>
	<ModalCustom>
		<template #content>
			<ModalIcon />
			<h1 class="text-2xl text-black">刪除確認</h1>
			<p class="mt-4 mb-5 text-gray-500"
				>您確定要刪除
				<span class="text-emerald-400">{{ modalStore.data.name }}</span> 嗎?</p
			>
		</template>
		<template #buttons>
			<div class="flex justify-center gap-5">
				<button @click="closeModal()" class="btn btn-cancel" aria-label="取消"
					>取消</button
				>
				<button
					@click="deleteRecipient()"
					class="btn btn-confirm"
					aria-label="確認"
					>確認</button
				>
			</div>
		</template>
	</ModalCustom>
</template>

<script setup lang="ts">
import { deleteRecipientsApi } from '@/api/member';
const modalStore = useModal();
const recipientStore = useRecipient()
const { getRecipients } = useRecipients();


const closeModal = (): void => {
	modalStore.closeModal();
};

const deleteRecipient = async (): Promise<void> => {
	await deleteRecipientsApi(modalStore.data.id);
	modalStore.openModal({
		type: 'alert',
        title:'刪除成功',
        message:'收件人已刪除'
	});
    await getRecipients()
};
</script>

<style scoped></style>
