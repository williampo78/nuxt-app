<template>
	<div class="md:flex gap-6">
		<div class="flex-1">
			<div class="flex text-gray-400 text-sm md:text-lg">
				<button
					@click="getCartList('spring')"
					class="flex-1 py-3 border-b-2 border-gray-400 outline-none"
					:class="{
						'text-blue-primary !border-blue-primary': type === 'spring',
					}"
				>
					春天線上購出貨 ({{ cartStore.cartInfo.productRow.dradvice }})
				</button>
				<button
					@click="getCartList('supplier')"
					class="flex-1 py-3 border-b-2 border-gray-400 outline-none"
					:class="{
						'text-blue-primary !border-blue-primary': type === 'supplier',
					}"
				>
					廠商出貨 ({{ cartStore.cartInfo.productRow.supplier }})
				</button>
			</div>
			<p class="my-3">
				購物車內合計有
				<span class="text-emerald-400">
					{{ cartStore.cartInfo.list.length }}
				</span>
				項商品
			</p>
			<ul class="border border-sky-300 rounded-lg overflow-hidden">
				<li
					class="hidden md:flex gap-3 px-4 py-2 bg-sky-300 text-white text-sm text-center"
				>
					<span class="md:w-[58%] text-left">商品明細</span>
					<span class="w-[130px]">數量</span>
					<span class="flex-1">單價 </span>
					<span class="flex-1">小計</span>
					<span class="w-10"></span>
				</li>
				<CartList
					v-for="item in cartStore.cartInfo.list"
					:key="item.productNo"
					:item="item"
					class="border-b border-gray-200 last:border-none"
					@getCartList="getCartList"
				/>
			</ul>
			<CartNotice />
		</div>

		<div class="font-medium md:w-[250px]">
			<div
				class="md:fixed md:w-[250px] top-[350px] bg-sky-50 rounded-xl p-4 shadow-md"
			>
				<div class="flex justify-between">
					<p>折後商品總價</p>
					<p>${{ formatNumberWithCommas(cartStore.cartInfo.checkout) }}</p>
				</div>
				<div class="flex justify-between">
					<p>使用點數</p>
					<input
						v-model="usingPoint"
						type="number"
						class="w-[120px] h-10 border-2 border-solid border-gray-300 rounded-md p-2 text-right"
					/>
				</div>
				<small class="block text-right text-gray-400">尚有: 99點</small>
				<div
					class="flex justify-between py-3 border-t border-gray-300 font-bold md:text-lg"
				>
					<p>結帳金額</p>
					<p class="text-red"
						>${{ formatNumberWithCommas(cartStore.cartInfo.checkout - usingPoint) }}</p
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { getCartListApi } from '@/api/cart';
import { formatNumberWithCommas } from '@/composables/useFormat';


const cartStore = useCart();
const usingPoint = ref(0);
const type = ref('spring');

onMounted(async () => {
	await nextTick();
	await getCartList(type.value);
});

const getCartList = async (payload: string) => {
	if (cartStore.count === 0) {
		return;
	}
	type.value = payload;
	let data;
	if (payload === 'spring') {
		data = await getCartListApi();
	} else {
		data = await getCartListApi({ stock_type: 'supplier' });
	}
	if (payload === 'spring' && !data.result.list.length) {
		type.value = 'supplier';
		data = await getCartListApi({ stock_type: 'supplier' });
	}
	cartStore.setCartList(data.result);
};
</script>

<style scoped></style>
