<template>
	<form @submit.prevent autocomplete="on">
		<div class="md:w-[80%] md:mx-auto">
			<InputField
				label="姓名"
				id="name"
				v-model:inputValue="fields.name"
				required
				:formSubmit="formSubmit"
			/>
			<InputField
				label="手機"
				id="mobile"
				v-model:inputValue="fields.mobile"
				required
				:formSubmit="formSubmit"
			/>
			<InputTelephone
				id="tel"
				v-model:inputTel="fields.telephone"
				v-model:inputExt="fields.ext"
			/>
			<InputField
				label="E-mail"
				id="email"
				type="email"
				v-model:inputValue="fields.email"
			/>

			<InputAddress
				@setAddressData="setAddressData($event)"
				:original-city-id="addressFields.cityId"
				:original-district-id="addressFields.districtId"
				:original-address="addressFields.address"
			/>
			<div class="mt-3 md:grid md:grid-cols-[130px,1fr] md:gap-6">
				<label
					class="text-emerald-400 cursor-pointer md:col-start-2"
					for="isDefault"
				>
					<span>
						<font-awesome-icon
							v-if="!isDefault"
							:icon="['far', 'square']"
							class="text-gray-400"
						/>
						<font-awesome-icon v-else :icon="['fas', 'square-check']" />
					</span>
					<input
						type="checkbox"
						id="isDefault"
						v-model="isDefault"
						class="hidden"
					/>
					將此地址設為預設地址
				</label>
			</div>
		</div>
		<div class="flex justify-center gap-5 bg-teal-50 mt-6 py-8 md:py-12">
			<button @click.prevent="cancelHandler()" class="btn btn-cancel" aria-label="取消">取消</button>
			<button
				@click="updateRecipient()"
				class="btn btn-confirm"
				aria-label="確認"
				>確認</button
			>
		</div>
	</form>
</template>

<script setup lang="ts">
import { updateRecipientsApi } from '@/api/member';
import { AddressData } from '@/types/area';
const { getRecipients } = useRecipients();

const recipientStore = useRecipient();
const areaStore = useArea();
const modalStore = useModal();
const route = useRoute();
const router = useRouter();

const fields = ref({
	name: <string>'',
	mobile: <string>'',
	telephone: <string>'',
	ext: <string>'',
	email: <string>'',
});

const addressFields = ref<AddressData>({
	cityId: <number | null>null,
	districtId: <number | null>null,
	zipCode: <string>'',
	address: <string>'',
});

const isDefault = ref<boolean>(false);

const formSubmit = ref<boolean>(false);

const city = computed(() => {
	return areaStore.cities.find((city) => {
		return city.id === addressFields.value.cityId;
	});
});

const district = computed(() => {
	return areaStore.districts.find((district) => {
		return district.id === addressFields.value.districtId;
	});
});

const submitData = computed(() => {
	return {
		note_type: 'HOME',
		name: fields.value.name,
		mobile: fields.value.mobile,
		telephone: fields.value.telephone,
		telephone_ext: fields.value.ext,
		email: fields.value.email,
		city_id: city.value?.id,
		city_name: city.value?.name,
		district_id: district.value?.id,
		district_name: district.value?.name,
		zip_code: district.value?.zipCode,
		address: addressFields.value.address,
		cvs_type: '',
		cvs_store_no: '',
		is_default: isDefault.value ? 1 : 0,
	};
});

//methods

//取得Address component的地址資料
const setAddressData = (data: AddressData): void => {
	addressFields.value = data;
};

//取得要更改的收件人資訊
const getRecipientData = () => {
	const currentRecipient = recipientStore.recipients.find((recipient) => {
		return recipient.id === +route.params.id;
	});

	if (currentRecipient) {
		fields.value.name = currentRecipient.name;
		fields.value.mobile = currentRecipient.mobile;
		fields.value.email = currentRecipient.email;
		fields.value.telephone = currentRecipient.telephone;
		fields.value.ext = currentRecipient.telephone_ext;

		addressFields.value.cityId = currentRecipient.city_id;
		addressFields.value.districtId = currentRecipient.district_id;
		addressFields.value.address = currentRecipient.address;
		isDefault.value = currentRecipient.is_default === 1 ? true : false;
	}
};

const updateRecipient = async () => {
	formSubmit.value = true;
	if (!fields.value.name || !fields.value.mobile) {
		return;
	}
	await updateRecipientsApi(+route.params.id, submitData.value);
	await getRecipients();
	modalStore.openModal({
		type: 'alert',
		title: '修改成功',
		message: '收件人資訊已修改成功',
	});
	router.push('/member/recipients');
};

const cancelHandler = ()=>{
	router.push('/member/recipients')
}

onMounted(() => {
	getRecipientData();
});
</script>

<style scoped></style>
