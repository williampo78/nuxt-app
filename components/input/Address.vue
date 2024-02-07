<template>
	<div
		class="relative mt-4 md:grid md:grid-cols-[130px,1fr] text-black md:items-center md:gap-x-6 md:mt-8"
		:class="{ 'mt-5 md:mt-9': required }"
	>
		<span class="text-right">地址</span>
		<div class="grid grid-cols-2 gap-2">
			<div
				class="select-box"
				:class="{ '!border-red': formSubmit && required && !selectedCity.id }"
			>
				<button
					@click.stop="(showCities = !showCities), (showDistricts = false)"
					class="w-full text-left py-2 px-4"
					aria-label="展開城市"
				>
					{{ selectedCity.name ? selectedCity.name : '請選擇' }}
				</button>
				<ul v-if="showCities" class="select-options">
					<li
						v-for="city in areaStore.cities"
						:key="city.id"
						class="select-option"
						@click="selectCity(city), setAddressData()"
						:class="{ 'bg-gray-200': selectedCity.id === city.id }"
					>
						{{ city.name }}
					</li>
				</ul>
			</div>
			<div
				class="select-box"
				:class="{
					'bg-gray-100 !text-gray-300 ': !selectedCity.id,
					'!border-red': formSubmit && required && !selectedDistrict.id,
				}"
			>
				<button
					@click.stop="(showDistricts = !showDistricts), (showCities = false)"
					class="w-full text-left py-2 px-4"
					:class="{ 'cursor-not-allowed': !selectedCity.id }"
					aria-label="展開鄉鎮區"
				>
					{{
						selectedDistrict.id
							? `${selectedDistrict.zipCode} ${selectedDistrict.name}`
							: '請選擇'
					}}
				</button>
				<ul v-if="showDistricts" class="select-options">
					<li
						@click="(selectedDistrict = district), setAddressData()"
						v-for="district in areaStore.districts"
						:key="district.name"
						class="select-option"
						:class="{ 'bg-gray-200': selectedDistrict.id === district.id }"
					>
						{{ district.zipCode }} {{ district.name }}
					</li>
				</ul>
			</div>
			<div
				class="py-2 px-4 border-2 border-gray-300 rounded-lg col-span-2"
				:class="{ '!border-red': formSubmit && required && !address }"
			>
				<input
					type="text"
					id="address"
					v-model="address"
					class="w-full"
					@input="setAddressData()"
					autocomplete="on"
				/>
			</div>
		</div>
		<small
			v-if="required"
			class="absolute right-0 top-1 text-xs text-red font-medium md:bottom-[103%] md:top-auto"
			>必填</small
		>
	</div>
</template>

<script setup lang="ts">
import { City, District } from '@/types/area';
const areaStore = useArea();

const emits = defineEmits(['setAddressData']);

const props = defineProps<{
	originalCityId: number | null;
	originalDistrictId: number | null;
	originalAddress: string;
	required?: boolean;
	formSubmit?: boolean;
}>();

const selectedCity = ref<City>({ id: null, name: '' }); //選擇的城市
const selectedDistrict = ref<District>({ id: null, name: '', zipCode: '' }); //選擇的鄉鎮區
const address = ref<string>(''); //地址

const showCities = ref<boolean>(false); //展開城市選單
const showDistricts = ref<boolean>(false); //展開鄉鎮區選單

onMounted(() => {
	setTimeout(() => {
		getMemberAddress();
	}, 100);
	//選單外收合選單
	document.addEventListener('click', () => {
		showCities.value = false;
		showDistricts.value = false;
	});
});

//computed
const addressData = computed(() => {
	return {
		cityId: selectedCity.value.id,
		districtId: selectedDistrict.value.id,
		zipCode: selectedDistrict.value.zipCode,
		address: address.value,
	};
});

//methods

//取得使用者地址
const getMemberAddress = () => {
	selectedCity.value = areaStore.cities.find((city) => {
		return city.id === props.originalCityId;
	}) || { id: null, name: '' };

	areaStore.getDistrict(selectedCity.value);

	selectedDistrict.value = areaStore.districts.find((district) => {
		return district.id === props.originalDistrictId;
	}) || {
		id: null,
		name: '',
		zipCode: '',
	};

	address.value = props.originalAddress;
};

//選擇城市
const selectCity = (city: City): void => {
	if (selectedCity.value.id !== city.id) {
		selectedDistrict.value = { id: null, name: '', zipCode: '' };
	}
	selectedCity.value = city;
	areaStore.getDistrict(city);
};

//傳遞地址資訊給parent component
const setAddressData = () => {
	emits('setAddressData', addressData.value);
};
</script>

<style scoped>
.select-box {
	@apply relative border-2 border-gray-300 text-left rounded-lg;
}
.select-options {
	@apply absolute bg-white w-full left-0 top-[115%]  rounded-lg border border-gray-300 max-h-[180px] overflow-auto;
}

.select-option {
	@apply py-2 px-4 cursor-pointer border-b border-gray-200 last:border-none hover:bg-gray-100;
}
</style>
