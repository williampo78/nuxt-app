<template>
	<ModalCustom>
		<template #content>
			<ModalIcon />
			<h1 class="text-2xl text-black">刪除確認</h1>
			<p v-if="modalStore.data.type === 'single'" class="my-4 text-gray-500"
				>您確定要刪除
				<span class="text-emerald-400">{{ products[0].name }}</span>
				嗎?
			</p>
			<div v-else class="text-gray-500 w-[60%]">
				<p class="text-center">您確定要刪除以下商品嗎？</p>
				<ul class="text-emerald-400 list-disc mt-3 mb-6">
					<li v-for="product in products" :key="product.id">
						{{ product.name }}
					</li>
				</ul>
			</div>
		</template>
		<template #buttons>
			<div class="flex justify-center gap-5">
				<button @click="closeModal()" class="btn btn-cancel" aria-label="取消"
					>取消</button
				>
				<button
					@click="confirmDelete()"
					class="btn btn-confirm"
					aria-label="確認"
					>確認</button
				>
			</div>
		</template>
	</ModalCustom>
</template>

<script setup lang="ts">
import { deleteCollectionsApi } from '@/api/member';
const emits = defineEmits(['deleted']);
const modalStore = useModal();
const collectionStore = useCollection();

const products = computed(() => {
	return modalStore.data.products;
});

const confirmDelete = async () => {
	const ids = products.value.map((p: { id: number; name: string }) => p.id);
	try {
		await deleteCollectionsApi({ product_id: ids });
		collectionStore.getCollections();
		modalStore.openModal({
			type: 'toast',
			message: '刪除成功',
			icon:'success'
		});
		emits('deleted');
	} catch (error) {
		console.log(error);
	}
};

const closeModal = () => {
	modalStore.closeModal();
};
</script>

<style scoped></style>
