<template>
	<div class="flex justify-end">
		<button
			@click="openDropdown = !openDropdown"
			class="relative py-2 px-4 border-2 border-gray-300 rounded-md flex items-center gap-12 text-black"
		>
			{{ selectedOption.name }}
			<font-awesome-icon
				:icon="['fas', 'chevron-down']"
				class="transition-all ease-linear"
				:class="{ '-rotate-180': openDropdown }"
			/>
			<Transition name="slide">
				<ul
					v-if="openDropdown"
					class="absolute top-[110%] left-0 w-full text-left border border-gray-200 bg-white rounded-md overflow-hidden"
				>
					<li
						@click="changeCategory(option)"
						v-for="option in options"
						:key="option.code"
						class="py-2 px-4 border-b border-gray-200 last:border-none"
					>
						{{ option.name }}
					</li>
				</ul>
			</Transition>
		</button>
	</div>

	<div
		v-for="(QA, index) in list"
		:key="index"
		class="rounded-lg overflow-hidden my-4 cursor-pointer border-2 border-emerald-400"
	>
		<div
			@click="openQuestion(QA)"
			class="p-4 bg-emerald-400 text-white text-sm flex justify-between items-center"
		>
			<p>
				{{ QA.question }}
			</p>
			<button>
				<font-awesome-icon
					:icon="['fas', 'chevron-down']"
					class="transition-all ease-linear"
					:class="{ '-rotate-180': openedQuestion === QA.question }"
				/>
			</button>
		</div>
		<div v-if="openedQuestion === QA.question" v-html="QA.answer" class="p-4">
		</div>
	</div>
</template>

<script setup lang="ts">
import { getQaListApi } from '@/api/footer';
interface QA {
	code: string;
	name: string;
	list: {
		sort: number;
		question: string;
		answer: string;
	}[];
}
const QAs = ref<QA[]>([]);
const options = ref<{ name: string; code: string }[]>([]);
const selectedOption = ref({ name: '', code: '' });

const openDropdown = ref<boolean>(false);
const openedQuestion = ref<string>('');

const list = computed(() => {
	const foundCategory = QAs.value.find((qa) => {
		return qa.code === selectedOption.value.code;
	});
	if (foundCategory) {
		return foundCategory.list;
	}
	return [];
});

const getQaList = async () => {
	const data = await getQaListApi();
	QAs.value = data.result;

	options.value = data.result.map((d: { name: string; code: string }) => {
		return { code: d.code, name: d.name };
	});
	selectedOption.value = options.value[0];
	openedQuestion.value = list.value[0].question;
};

const changeCategory = (option: { code: string; name: string }) => {
	selectedOption.value = option;
	openedQuestion.value = list.value[0].question;
};

const openQuestion = (QA: {
	sort: number;
	question: string;
	answer: string;
}) => {
	if (openedQuestion.value === QA.question) {
		openedQuestion.value = '';
	} else {
		openedQuestion.value = QA.question;
	}
};

await getQaList();
</script>

<style scoped></style>
