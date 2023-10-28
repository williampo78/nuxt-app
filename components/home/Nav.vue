<template>
	<div class="relative font-bold">
		<div class="flex py-[10px] text-blue-primary">
			<ul v-if="!open" class="flex overflow-auto gap-6 px-3">
				<li v-for="item in items" class="flex-shrink-0">
					{{ item.name }}
				</li>
			</ul>
			<span class="flex-1 px-3" v-else>選擇分類</span>
			<span
				@click="open = !open"
				class="w-[42px] flex-shrink-0 flex justify-center items-center border-l border-gray-300"
			>
				<font-awesome-icon
					:icon="['fas', 'chevron-right']"
					class="transition ease"
					:class="{ 'rotate-90': open }"
				/>
			</span>
		</div>
		<ul v-if="open" class="bg-yellow-forth p-4 grid grid-cols-3 gap-2 absolute w-full">
			<li
				v-for="item in items"
				class="text-center text-blue-primary bg-white border-2 border-blue-primary rounded-full"
			>
				{{ item.name }}</li
			>
		</ul>
	</div>
</template>

<script setup lang="ts">
const items = ref<{ name: string }[]>([
	{ name: '1+1 特惠組' },
	{ name: '熱銷專區' },
	{ name: '女性保健' },
	{ name: '兒童營養' },
	{ name: '益生菌' },
	{ name: '益生菌' },
	{ name: '益生菌' },
	{ name: '益生菌' },
	{ name: '益生菌' },
	{ name: '益生菌' },
]);

const open = ref<boolean>(false);
</script>

<style scoped lang="scss"></style>
