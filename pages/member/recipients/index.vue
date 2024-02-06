<template>
	<div class="flex justify-end mb-4">
		<button
			class="bg-emerald-400 rounded-md py-2 px-3 text-white text-sm md:text-base md:px-4"
		>
			<font-awesome-icon :icon="['fas', 'circle-plus']" class="mr-1" />
			新增收件人
		</button>
	</div>
	<div class="grid md:grid-cols-2 gap-x-5 gap-y-2">
		<div
			v-for="recipient in recipients"
			:key="recipient.id ? recipient.id : recipient.name"
			class="flex border-2 border-gray-200 p-4 rounded-2xl text-gray-500 font-medium"
			:class="{ '!border-emerald-400': recipient.is_default }"
		>
			<div class="flex-1">
				<div class="flex items-center mb-3">
					<p class="text-base text-black font-bold md:text-xl">
						{{ recipient.name }}</p
					>

					<span
						v-if="recipient.is_default"
						class="bg-emerald-400 text-white text-xs py-1.5 px-3 rounded-full ml-2"
					>
						預設
					</span>
				</div>
				<p class="mb-2">
					<font-awesome-icon
						:icon="['fas', 'mobile-screen-button']"
						class="mr-2"
					/>
					{{ recipient.mobile }}
				</p>
				<p>
					<font-awesome-icon :icon="['fas', 'location-dot']" class="mr-2" />
					{{ fullAddress(recipient) }}
				</p>
			</div>
			<div
				class="flex flex-col justify-between text-gray-400 md:flex-row-reverse md:gap-6"
			>
				<button @click="router.push(`/member/recipients/${recipient.id}`)">
					<font-awesome-icon :icon="['fas', 'pen-to-square']" />
				</button>
				<button aria-label="刪除收件人" @click="openDeleteModal(recipient)">
					<font-awesome-icon :icon="['fas', 'trash-can']" />
				</button>
			</div>
		</div>
	</div>
	<RecipientDeleteModal v-if="modalStore.name === 'delete recipient'" />
</template>

<script setup lang="ts">
import { RecipientData } from '@/types/recipient';
const { fullAddress } = useRecipients();
const recipientStore = useRecipient();
const router = useRouter();
const modalStore = useModal();

const recipients = computed(() => {
	return recipientStore.recipients;
});

const openDeleteModal = (recipient: RecipientData): void => {
	modalStore.openModal({
		type: 'custom',
		icon: 'warning',
		name: 'delete recipient',
		hasHeader: false,
		data: { name: recipient.name, id: recipient.id },
	});
};
</script>

<style scoped></style>
