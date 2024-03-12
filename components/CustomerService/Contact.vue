<template>
	<div class="md:flex md:px-8">
		<form @submit.prevent action="" class="flex-1">
			<InputField
				label="姓名"
				id="name"
				v-model:inputValue="name"
				required
				:formSubmit="formSubmit"
			/>
			<InputField
				label="手機"
				id="mobile"
				v-model:inputValue="mobile"
				required
				:type="'tel'"
				:formSubmit="formSubmit"
			/>
			<InputTelephone
				id="tel"
				v-model:inputTel="telephone"
				v-model:inputExt="ext"
			/>
			<InputField
				label="E-mail"
				id="email"
				type="email"
				v-model:inputValue="email"
			/>
			<div class="md:grid grid-cols-[150px,1fr] gap-6 mt-6">
				<span class="text-right"> 您的問題與意見 </span>
				<textarea
					v-model="remark"
					name=""
					id=""
					cols="30"
					rows="5"
					class="w-full py-2 px-4 border-2 border-gray-300 rounded-lg text-black font-medium outline-none resize-none"
				></textarea>
			</div>
			<div class="flex justify-center gap-4 mt-5">
				<button class="btn btn-cancel">重新填寫</button>
				<button @click="sendContactForm()" class="btn btn-confirm"
					>確認送出</button
				>
			</div>
		</form>
		<img class="hidden md:block" src="/images/contact-character.svg" alt="" />
	</div>
</template>

<script setup lang="ts">
import { sendContactFormApi } from '@/api/footer';
const { mobile, validateMobile, password } = useValidate();
const modalStore = useModal();

const name = ref<string>('');
const telephone = ref<string>('');
const ext = ref<string>('');
const email = ref<string>('');
const remark = ref<string>('');

const formSubmit = ref<boolean>(false);

const submidData = computed(() => {
	return {
		contact_name: name.value,
		content_email: email.value,
		content_mobile: mobile.value,
		content_tel: telephone.value,
		content_text: remark.value,
	};
});

const sendContactForm = async () => {
	try {
		const response = await sendContactFormApi(submidData.value);
		if (!response.error_code) {
			modalStore.openModal({
				type: 'toast',
				message: '發送成功',
				icon: 'success',
			});
		}
	} catch (error) {}
};
</script>

<style scoped></style>
