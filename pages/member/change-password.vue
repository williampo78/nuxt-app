<template>
	<form @submit.prevent>
		<div class="mx-auto md:w-[80%]">
			<InputField
				v-model:inputValue="currentPassword"
				:type="'password'"
				:required="true"
				:label="'請輸入現在使用密碼'"
				id="current"
				:placeholder="'請輸入8-12位的半形英數字'"
				:formSubmit="formSubmit"
				:error-message="currentErrorMsg"
			/>
			<InputField
				v-model:inputValue="newPassword"
				:type="'password'"
				:required="true"
				:label="'請輸入新密碼'"
				id="new"
				:placeholder="'請輸入密碼'"
				:formSubmit="formSubmit"
				:error-message="newErrorMsg"
			/>
			<InputField
				v-model:inputValue="confirmPassword"
				:type="'password'"
				:required="true"
				:label="'請再次輸入新密碼'"
				id="confirm"
				:placeholder="'請再次輸入新密碼'"
				:formSubmit="formSubmit"
				:error-message="confirmErrorMsg"
			/>
		</div>
		<div class="flex justify-center gap-4 bg-teal-50 mt-6 mb-5 py-6 md:py-12">
			<button @click="cancel()" class="btn btn-cancel" aria-label="取消"
				>取消</button
			>
			<button @click="confirm()" class="btn btn-confirm" aria-label="確認修改"
				>確認修改</button
			>
		</div>
		<div class="flex justify-center">
			<p
				class="border-2 border-emerald-400 rounded-md text-emerald-400 font-medium p-3 flex items-center gap-3"
			>
				<span>
					<font-awesome-icon :icon="['fas', 'circle-exclamation']" />
				</span>
				成功重設密碼後，您現有的密碼將會失效，系統將會進行登出，請使用新密碼進行登入！
			</p>
		</div>
	</form>
</template>

<script setup lang="ts">
import { updatePasswordApi } from '@/api/member';
import { checkPasswordValidation } from '@/composables/useFormat';
definePageMeta({
	middleware: ['auth'],
});

const router = useRouter();
const modalStore = useModal();
const memberStore = useMember()

const currentPassword = ref('');
const newPassword = ref('');
const confirmPassword = ref('');

const formSubmit = ref<boolean>(false);

const currentErrorMsg = computed(() => {
	const valid = checkPasswordValidation(currentPassword.value);
	if (formSubmit.value && !valid) {
		return '※請輸入8-12位的半形英數字';
	}
});
const newErrorMsg = computed(() => {
	const valid = checkPasswordValidation(newPassword.value);
	if (formSubmit.value && !valid) {
		return '※請輸入8-12位的半形英數字';
	}
});
const confirmErrorMsg = computed(() => {
	if (formSubmit.value && confirmPassword.value !== newPassword.value) {
		return '※與新密碼不符';
	}
});

const cancel = () => {
	router.push('/member/center');
};

const confirm = async () => {
	formSubmit.value = true;
	if (currentErrorMsg.value || newErrorMsg.value || confirmErrorMsg.value) {
		return;
	}
	try {
		const response = await updatePasswordApi({
			oldPassword: currentPassword.value,
			newPassword: newPassword.value,
		});
		if (response.error_code === null) {
			modalStore.openModal({
				type: 'toast',
				message: '修改成功,請重新登入',
				icon: 'success',
			});
			router.push('/login');
			memberStore.$reset()
		}
		console.log(response);
	} catch (error) {}
};
</script>

<style scoped></style>
