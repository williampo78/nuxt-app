<template>
	<div
		class="relative flex flex-col gap-2 md:grid md:grid-cols-[130px,1fr,180px] mt-4 md:items-center md:gap-x-6 md:mt-8"
		:class="{ ' md:mt-[40px]': required }"
	>
		<label for="telephone" class="inline-block mb-1 md:text-right md:mb-0">
			連絡電話
		</label>
		<div
			class="relative py-2 px-4 border-2 border-gray-300 text-sm text-gray-900 font-medium rounded-lg flex items-center gap-2 md:text-base"
			:class="{
				' bg-gray-100': disabled,
				'!border-red': required && formSubmit && !inputTel,
			}"
		>
			<font-awesome-icon :icon="['fas', 'phone']" class="text-gray-300" />
			<input
				type="text"
				id="telephone"
				name="telephone"
				:disabled="disabled"
				v-model="inputTel"
				class="w-full"
				:class="{ 'text-gray-300': disabled }"
				autocomplete="on"
				placeholder="請輸入電話號碼"
			/>
			<small
				v-if="required"
				class="absolute right-0 bottom-[120%] text-xs text-red font-medium"
				>必填</small
			>
		</div>
		<div
			class="py-2 px-4 border-2 border-gray-300 text-sm text-gray-900 font-medium rounded-lg md:text-base"
		>
			<input
				v-model="inputExt"
				type="text"
				name="telephone"
				id="ext"
				class="max-w-full"
				placeholder="分機"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
const emits = defineEmits(['update:inputTel', 'update:inputExt']);
const props = withDefaults(
	defineProps<{
		required?: boolean;
		disabled?: boolean;
		inputTel?: string | null | number;
		inputExt?: string | null | number;
		formSubmit?: boolean;
	}>(),
	{
		//default values
		required: false,
		disabled: false,
		inputTel: '',
		inputExt: '',
	}
);

onMounted(() => {});

const inputTel = computed({
	get() {
		return props.inputTel;
	},
	set(newValue) {
		emits('update:inputTel', newValue);
	},
});
const inputExt = computed({
	get() {
		return props.inputExt;
	},
	set(newValue) {
		emits('update:inputExt', newValue);
	},
});
</script>

<style scoped></style>
