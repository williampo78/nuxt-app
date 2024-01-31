<template>
	<form @submit.prevent autocomplete="on">
		<div class="md:max-w-[80%] mx-auto">
			<InputField
				:label="'帳號(手機號碼)'"
				:icon="'mobile-screen-button'"
				id="mobile"
				disabled
				v-model:inputValue="memberData.mobile"
			/>
			<InputField
				:label="'姓名'"
				:icon="'user'"
				id="name"
				required
				v-model:inputValue="memberData.name"
			/>
			<InputField
				:label="'E-mail'"
				:icon="'envelope'"
				id="email"
				required
				v-model:inputValue="memberData.email"
			/>
			<InputRadio
				:options="radioOptions"
				:label="'性別'"
				v-model:inputValue="memberData.sex"
			/>
			<InputField
				:label="'生日'"
				:icon="'calendar-days'"
				:type="'date'"
				id="birthday"
				v-model:inputValue="memberData.birthday"
				disabled
			/>
			<InputAddress @setAddressData="setAddressData($event)" />
		</div>
		<div class="bg-teal-50 py-6 flex justify-center gap-4 mt-6 md:py-12">
			<button @click="router.push('/member/center')" class="btn btn-cancel" aria-label="取消">取消</button>
			<button
				@click="updateMemberInfo()"
				class="btn btn-confirm"
				aria-label="確認修改"
				>確認修改</button
			>
		</div>
		<div
			class="text-center text-gray-600 my-6 md:flex md:justify-center md:gap-2"
		>
			<p>如需修改手機號碼或生日, 請洽客服</p>
			<p class="text-emerald-400">service@gmail.com</p>
		</div>
	</form>
</template>

<script setup lang="ts">
import { updateMemberInfoApi } from '@/api/member';
import { AddressData } from '@/types/area';
const memberStore = useMember();
const modalStore = useModal();
const router = useRouter();

const memberData = ref({
	name: <string>'',
	email: <string>'',
	mobile: <string>'',
	sex: <number>0,
	birthday: <string>'',
	recommendSource: <string>'aaa',
});

const addressData = ref<AddressData>({
	cityId: <number | null>null,
	districtId: <number | null>null,
	zipCode: <string>'',
	address: <string>'',
});

const radioOptions = ref([
	{ name: 'gender', value: 1, id: 'male', label: '生理男' },
	{ name: 'gender', value: 0, id: 'female', label: '生理女' },
]);

onMounted(() => {
	getMemberData();
});

//computed
const submitData = computed(() => {
	return { ...memberData.value, ...addressData.value };
});

//methods

//取得使用者資訊
const getMemberData = () => {
	const memberInfo = memberStore.memberInfo;
	memberData.value.name = memberInfo.name;
	memberData.value.email = memberInfo.email;
	memberData.value.mobile = memberInfo.mobile;
	memberData.value.birthday = memberInfo.birthday;
	memberData.value.sex = memberInfo.sex === 'MALE' ? 1 : 0;
};

//取得Adress component的地址資料
const setAddressData = (data: AddressData): void => {
	addressData.value = data;
};

const updateMemberInfo = async () => {
	const data = await updateMemberInfoApi(submitData.value);
	if (data.error_code) {
		alert('欄位錯誤');
	} else {
		modalStore.openModal({
			type: 'alert',
			title: '修改成功',
			icon: 'success',
			message: '您的資料已更新',
		});
		memberStore.setUserInfo();
	}
	console.log(data);
};
</script>

<style scoped></style>
