<template>
	<div
		class="relative md:grid md:grid-cols-[130px,1fr] mt-4 md:items-center md:gap-x-6 md:mt-8"
		:class="{ ' md:mt-[40px]': required }"
	>
		<label :for="id" class="inline-block mb-1 md:text-right md:mb-0">
			{{ label }}
		</label>
		<div
			class="relative py-2 px-4 border-2 border-gray-300 text-sm text-gray-900 font-medium rounded-lg flex items-center gap-2 md:text-base"
			:class="{
				' bg-gray-100': disabled,
				'!border-red': required && formSubmit && !inputValue,
			}"
		>
			<font-awesome-icon
				v-if="icon || inputIcon"
				:icon="['fas', icon ? icon : inputIcon]"
				class="text-gray-300"
			/>
			<input
				:type="type"
				:id="id"
				:disabled="disabled"
				v-model="inputValue"
				class="w-full"
				:class="{ 'text-gray-300': disabled }"
				autocomplete="on"
			/>
			<small
				v-if="required"
				class="absolute right-0 bottom-[120%] text-xs text-red font-medium"
				>必填</small
			>
		</div>
	</div>
</template>

<script setup lang="ts">
const emits = defineEmits(['update:inputValue']);
const props = withDefaults(
	defineProps<{
		id: string;
		icon?: string;
		label: string;
		type?: string;
		required?: boolean;
		disabled?: boolean;
		inputValue?: string | null | number;
		formSubmit?: boolean;
	}>(),
	{
		//default values
		type: 'text',
		required: false,
		disabled: false,
		inputValue: '',
	}
);
// const inputValue = ref<string | number>('');

onMounted(() => {});

const inputValue = computed({
	get() {
		return props.inputValue;
	},
	set(newValue) {
		emits('update:inputValue', newValue);
	},
});

const inputIcon = computed((): string => {
	const inputId = props.id;
	let icon = '';
	switch (inputId) {
		case 'name':
			icon = 'user';
			break;

		case 'mobile':
			icon = 'mobile-screen-button';
			break;

		case 'email':
			icon = 'envelope';
			break;
		default:
			icon = '';
	}

	return icon;
});
</script>

<style scoped></style>
