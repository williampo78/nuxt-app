<template>
	<div
		class="relative flex flex-col gap-y-1 md:grid md:grid-cols-[130px,1fr] mt-4 md:items-center md:gap-x-6 md:mt-8"
	>
		<span class="md:text-right">{{ label }}</span>
		<div class="flex items-center gap-3 text-black">
			<label
				v-for="option in options"
				:key="option.id"
				:for="option.id"
				class="flex items-center gap-2 cursor-pointer"
			>
				<span
					class="block w-4 h-4 rounded-full border-2 border-gray-300"
					:class="{
						'border-[5px] !border-blue-primary': option.value === inputValue,
					}"
				></span>
				{{ option.label }}
				<input
					v-model="inputValue"
					type="radio"
					:value="option.value"
					:id="option.id"
					:name="option.name"
					class="hidden"
				/>
			</label>
		</div>
	</div>
</template>

<script setup lang="ts">
const emits = defineEmits(['update:inputValue']);
interface RadioOption {
	name: string;
	value: string | number;
	id: string;
	label: string;
}

const props = defineProps<{
	options: RadioOption[];
	label: string;
	inputValue: string | number;
}>();

const inputValue = computed({
	get() {
		return props.inputValue;
	},
	set(newValue) {
		emits('update:inputValue', newValue);
	},
});
</script>

<style scoped></style>
