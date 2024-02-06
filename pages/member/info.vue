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
				:formSubmit="formSubmit"
				v-model:inputValue="memberData.name"
			/>
			<InputField
				:label="'E-mail'"
				id="email"
				required
				:formSubmit="formSubmit"
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
			<InputAddress
				@setAddressData="setAddressData($event)"
				:original-city-id="addressData.cityId"
				:original-district-id="addressData.districtId"
				:original-address="addressData.address"
			/>
		</div>
		<div class="bg-teal-50 py-6 flex justify-center gap-4 mt-6 md:py-12">
			<button
				@click.prevent="router.push('/member/center')"
				class="btn btn-cancel"
				aria-label="取消"
				>取消</button
			>
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
	<ModalCustom />
</template>

<script setup lang="ts">
import { updateMemberInfoApi } from '@/api/member';
import { AddressData } from '@/types/area';
const memberStore = useMember();
const modalStore = useModal();
const router = useRouter();

//data
const memberData = ref({
	name: <string>'',
	email: <string>'',
	mobile: <string>'',
	sex: <number>0,
	birthday: <string>'',
	recommendSource: <string>'aaa',
});

const addressData = ref<AddressData>({
	cityId: null,
	districtId: null,
	zipCode: '',
	address: '',
});

const radioOptions = ref([
	{ name: 'gender', value: 1, id: 'male', label: '生理男' },
	{ name: 'gender', value: 0, id: 'female', label: '生理女' },
]);

const formSubmit = ref<boolean>(false);

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

	addressData.value.cityId = memberInfo.cityId;
	addressData.value.districtId = memberInfo.districtId;
	addressData.value.zipCode = memberInfo.zipCode;
	addressData.value.address = memberInfo.address;
};

//取得Address component的地址資料
const setAddressData = (data: AddressData): void => {
	addressData.value = data;
};

const updateMemberInfo = async () => {
	formSubmit.value = true;
	if (!memberData.value.name || !memberData.value.email) {
		return;
	}
	const data = await updateMemberInfoApi(submitData.value);
	if (data.error_code) {
		modalStore.openModal({
			type: 'alert',
			title: '欄位錯誤',
			icon: 'error',
			message: '請檢查欄位是否正確填寫',
		});
	} else {
		modalStore.openModal({
			type: 'alert',
			title: '修改成功',
			icon: 'success',
			message: '您的資料已更新',
		});
		//取得更新後的使用者資訊
		memberStore.setUserInfo();
		router.push('/member/center');
	}
};
</script>

<style scoped></style>
