<template>
	<div class="mt-6 p-4 bg-gray-100 rounded-xl">
		<h5>※ 訂購須知：</h5>
		<ul class="list-disc pl-4 text-sm font-medium mt-1">
			<li v-for="notice in notices" :key="notice"> {{ notice }}</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
const notices = ref([
	'若您的購物車同時有二台以上，則須分開結帳步驟。',
	'機車商品由於辦理領牌作業時，需核對領牌人及發票抬頭，故訂購機車商品時，每筆訂單僅限單一品項訂購一件。',
	'旅遊商品為便於人數統計及代收轉付收據開立作業，故請於訂購旅遊商品時，每筆訂單僅限訂購單一品項商品。',
	'請下拉選擇商品之配送方式，部分商品僅提供宅配到府，無超商取貨服務。',
	'提醒您,若您使用超商取貨方式下單但貨到後未至門市取件,或是使用ATM/iBon/FamiPort付款方式,而有多次未付款之紀錄,將會影響您未來使用超商取貨服務及訂購商品的權益!',
	'若使用週期配送服務,春天線上購將依您選擇的條件自動週期訂購商品,詳細規範請參閱週期配送服務條款。',
	'使用無卡分期支付，每筆訂單內僅能有單一筆商品。',
]);
</script>

<style scoped></style>
