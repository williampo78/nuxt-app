<template>
	<div class="flex justify-between items-center text-sm mb-4 md:text-base">
		<p>
			已收藏
			<span class="text-emerald-400">{{ collections.length }}</span> 件商品
		</p>
		<button
			aria-label="刪除"
			class="bg-red text-white font-medium py-1.5 px-3 rounded-md"
		>
			<font-awesome-icon :icon="['fas', 'trash-can']" class="mr-1" />
			刪除
		</button>
	</div>
	<ul class="flex flex-col gap-y-2">
		<li
			v-for="collection in collections"
			:key="collection.product_no"
			class="flex gap-2 py-3 px-2 md:gap-6"
		>
			<span
				@click="toggleSelectedId(collection.product_id)"
				class="self-center cursor-pointer md:text-xl"
			>
				<font-awesome-icon
					v-if="selectedIds.includes(collection.product_id)"
					:icon="['fas', 'square-check']"
					class="text-emerald-400"
				/>
				<font-awesome-icon
					v-else
					:icon="['far', 'square']"
					class="text-gray-400"
				/>
			</span>
			<img :src="collection.product_photo" alt="" class="max-w-[90px]" />
			<div class="flex-1 flex flex-col justify-between md:text-lg">
				<p class="text-sm text-black md:text-lg">{{
					collection.product_name
				}}</p>
				<p class="text-red"
					>${{ formatNumberWithCommas(collection.selling_price) }}
					<sub class="line-through text-gray-400 font-medium text-xs ml-2"
						>${{ formatNumberWithCommas(collection.list_price) }}</sub
					></p
				>
			</div>
			<div
				class="flex flex-col justify-between items-center text-gray-400 md:flex-row md:gap-9"
			>
				<button aria-label="加入購物車">
					<font-awesome-icon :icon="['fas', 'cart-shopping']" />
				</button>
				<button aria-label="移除收藏">
					<font-awesome-icon :icon="['fas', 'trash-can']" />
				</button>
			</div>
		</li>
	</ul>
</template>

<script setup lang="ts">
import { formatNumberWithCommas } from '~/composables/useFormat';
import { Collection } from '~/types/collection';
import { getCollectionsApi } from '~/api/member';

const collections = ref<Collection[]>([]);
const selectedIds = ref<number[]>([]);
onMounted(async () => {
	await nextTick();
	getCollections();
});

const getCollections = async () => {
	const data = await getCollectionsApi();
	collections.value = data.result;
};

const toggleSelectedId = (collectionId: number) => {
	if (selectedIds.value.includes(collectionId)) {
		selectedIds.value = selectedIds.value.filter((id) => {
			return id !== collectionId;
		});
	} else {
		selectedIds.value.push(collectionId);
	}
};
</script>

<style scoped></style>
