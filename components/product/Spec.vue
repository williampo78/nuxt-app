<template>
	<div
		class="flex gap-x-12 mb-3"
		v-for="(title, index) in orderSpec.spec_title"
		:key="title"
	>
		<p class="text-gray-500">
			{{ title }}
		</p>
		<ul class="flex-1 flex flex-wrap gap-2" v-if="title">
			<li
				v-for="spec in index === 0 ? orderSpec.spec_1 : orderSpec.spec_2"
				:key="spec"
			>
				<button
					@click="selectSpec(spec, index)"
					class="border-2 border-gray-300 rounded-md py-2 px-4 text-black text-sm font-medium"
					:class="{
						'bg-blue-primary text-white !border-blue-primary':
							(index === 0 && chosenSpec1Name === spec) ||
							(index === 1 && chosenSpec2Name === spec),
					}"
				>
					{{ spec }}
				</button>
			</li>
		</ul>
	</div>
	<div class="flex gap-x-12 mb-3">
		<p class="text-gray-500">數量</p>
		<div class="border-2 border-gray-300 rounded-md overflow-hidden">
			<button @click="quantity--" class="py-2 px-4 border-r-2 border-gray-300">
				<font-awesome-icon :icon="['fas', 'minus']" />
			</button>
			<input
				v-model="quantity"
				type="number"
				id="quantity"
				class="w-20 text-center h-full"
			/>
			<button @click="quantity++" class="py-2 px-4 border-l-2 border-gray-300">
				<font-awesome-icon :icon="['fas', 'plus']" />
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Spec, SpecInfo } from '@/types/product';

const props = defineProps<{
	orderSpec: Spec;
}>();

const chosenSpec1Name = ref<string>('');
const chosenSpec2Name = ref<string>('');
const quantity = ref<number>(0);

onMounted(() => {
	chosenSpec1Name.value = props.orderSpec.spec_1[0] || '';
	chosenSpec2Name.value = props.orderSpec.spec_2[0] || '';
	getSpecInfo();
});

const selectSpec = (spec: string, index: number) => {
	if (index === 0) {
		chosenSpec1Name.value = spec;
	}
	if (index === 1) {
		chosenSpec2Name.value = spec;
	}

	getSpecInfo();
};

const getSpecInfo = () => {
	const info = props.orderSpec.spec_info.find((info) => {
		return (
			info.item_spec1 === chosenSpec1Name.value &&
			info.item_spec2 === chosenSpec2Name.value
		);
	});
};
</script>

<style scoped></style>
