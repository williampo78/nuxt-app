<template>
	<div class="flex justify-between items-center text-sm mb-4 md:text-base">
		<p>
			已收藏
			<span class="text-emerald-400">
				{{ collectionStore.collections.length }}
			</span>
			件商品
		</p>
		<button
			@click="removeCollection('batch')"
			aria-label="刪除"
			class="bg-red text-white font-medium py-1.5 px-3 rounded-md"
		>
			<font-awesome-icon :icon="['fas', 'trash-can']" class="mr-1" />
			刪除
		</button>
	</div>
	<ul class="flex flex-col gap-y-2">
		<li
			v-for="collection in collectionStore.collections"
			:key="collection.product_no"
			class="flex gap-2 py-3 px-2 md:gap-6"
		>
			<span
				@click="toggleSelectedProduct(collection)"
				class="self-center cursor-pointer md:text-xl"
			>
				<font-awesome-icon
					v-if="selectedProducts.includes(collection)"
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
				<button
					@click="removeCollection('single', collection)"
					aria-label="移除收藏"
				>
					<font-awesome-icon :icon="['fas', 'trash-can']" />
				</button>
			</div>
		</li>
	</ul>
	<CollectionRemoveModal
		v-if="modalStore.name === 'remove collection'"
		@deleted="deleted"
	/>
</template>

<script setup lang="ts">
import { formatNumberWithCommas } from '~/composables/useFormat';
import { Collection } from '~/types/collection';

const modalStore = useModal();
const collectionStore = useCollection();

const selectedProducts = ref<Collection[]>([]);

const toggleSelectedProduct = (collection: Collection) => {
	const included = selectedProducts.value.find((product) => {
		return product.product_id === collection.product_id;
	});
	if (included) {
		selectedProducts.value = selectedProducts.value.filter((product) => {
			return product.product_id !== collection.product_id;
		});
	} else {
		selectedProducts.value.push(collection);
	}
};

const removeCollection = (
	type: 'single' | 'batch',
	collection?: Collection
) => {
	let data;
	if (type === 'single') {
		data = {
			type,
			products: [
				{
					name: collection!.product_name,
					id: collection!.product_id,
				},
			],
		};
	} else {
		if (!selectedProducts.value.length) {
			modalStore.openModal({
				type: 'alert',
				title: '刪除提醒',
				message: '請先勾選要刪除的商品',
				icon:'warning'
			});
			return;
		}
		let products = selectedProducts.value.map((product) => {
			return {
				id: product.product_id,
				name: product.product_name,
			};
		});
		data = {
			type,
			products,
		};
	}
	modalStore.openModal({
		type: 'custom',
		icon: 'warning',
		name: 'remove collection',
		hasHeader: false,
		data,
	});
};
const deleted = () => {
	selectedProducts.value = [];
};
</script>

<style scoped></style>
