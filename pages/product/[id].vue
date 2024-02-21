<template>
	<div class="w-full max-w-[1200px]">
		<div class="mt-4 gap-x-9 md:flex">
			<section class="flex justify-center">
				<img
					:src="productPhotos[0]"
					alt=""
					width="480"
					height="480"
					class="max-h-[480px]"
				/>
			</section>
			<section class="flex-1">
				<p class="text-pink-secondary mt-4 mb-3"
					>{{ productInfo.promotion_label }}
				</p>
				<h5 class="text-lg text-blue-primary md:text-2xl">
					{{ productInfo.product_name }}
				</h5>
				<div v-if="certificate.length" class="flex items-center gap-x-4 my-3">
					<img
						v-for="(item, index) in certificate"
						:src="item.icon"
						:key="index"
						alt=""
						class="max-h-12"
					/>
				</div>
				<!-- <ul class="list-disc text-sm ml-5 font-medium">
					<li>健康食品雙認證 </li>
					<li>本產品非素食，不含球腸菌</li>
					<li>立攝適穩優Glucosmart桑葉水淬餐拌粉</li>
				</ul> -->
				<div class="py-4 border-y-2 border-gray-200 my-4">
					<p class="text-gray-500"
						>特價
						<span class="text-red text-3xl ml-6 mr-4">
							<sub class="text-xs">$</sub>{{ productInfo.selling_price }}
						</span>
						<sub class="text-gray-400 text-xs font-medium line-through">
							${{ productInfo.list_price }}
						</sub>
					</p>
				</div>
				<ul
					class="px-2 pb-4 flex flex-col gap-y-3 border-b-2 border-gray-200 my-4"
				>
					<li v-if="campaignInfo['優惠']" class="flex justify-between">
						<div class="text-gray-500 flex items-center">
							<span class="w-[22px]">
								<font-awesome-icon :icon="['fas', 'tag']" />
							</span>
							<p class="ml-2 mr-6">優惠</p>
							<div class="flex gap-x-3">
								<span
									v-for="campaign in campaignInfo['優惠']"
									class="text-sm text-pink-secondary border-2 border-pink-secondary rounded-md px-3"
								>
									{{ campaign.campaign_name }}
								</span>
							</div>
						</div>
						<span class="text-emerald-400">
							詳細
							<font-awesome-icon :icon="['fas', 'chevron-right']" />
						</span>
					</li>
					<li v-if="campaignInfo['贈品']" class="flex justify-between">
						<div class="text-gray-500 flex items-center">
							<span class="w-[22px]">
								<font-awesome-icon :icon="['fas', 'gift']" />
							</span>
							<p class="ml-2 mr-6">贈品</p>
							<div class="flex gap-x-3">
								<p
									v-for="campaign in campaignInfo['贈品']"
									class="text-blue-primary"
								>
									{{ campaign.campaign_name }}
								</p>
							</div>
						</div>
						<button class="text-emerald-400">
							詳細
							<font-awesome-icon :icon="['fas', 'chevron-right']" />
						</button>
					</li>
					<li class="flex justify-between">
						<div class="text-gray-500 flex items-center">
							<span class="w-[22px]">
								<font-awesome-icon :icon="['fas', 'truck']" />
							</span>
							<p class="ml-2 mr-6">配送</p>
							<div class="flex gap-x-3">
								<p class="text-blue-primary">
									<span
										v-for="delivery in productInfo.delivery"
										:key="delivery"
									>
										{{ delivery }}
									</span>
									<sub class="ml-3 text-xs font-normal text-gray-400">
										{{ shippingFee.notice }}
									</sub>
								</p>
							</div>
						</div>
					</li>
					<li class="flex justify-between">
						<div class="text-gray-500 flex items-center">
							<span class="w-[22px]">
								<font-awesome-icon :icon="['fas', 'money-check-dollar']" />
							</span>
							<p class="ml-2 mr-6">付款</p>
							<div class="flex">
								<p
									v-for="(payment, index) in availablePayments"
									class="text-blue-primary"
								>
									{{ payment.alt }}
									<span v-if="index < availablePayments.length - 1">/</span>
								</p>
							</div>
						</div>
					</li>
					<li v-if="installments.length" class="flex justify-between">
						<div class="text-gray-500 flex items-center">
							<span class="w-[22px]">
								<font-awesome-icon :icon="['fas', 'money-bills']" />
							</span>
							<p class="ml-2 mr-6">分期</p>
							<div class="flex gap-x-3">
								<p class="text-blue-primary"> 3 期 0利率 </p>
							</div>
						</div>
						<span class="text-emerald-400">
							詳細
							<font-awesome-icon :icon="['fas', 'chevron-right']" />
						</span>
					</li>
					<li class="flex justify-between">
						<div class="text-gray-500 flex items-center">
							<span class="w-[22px]">
								<font-awesome-icon :icon="['fas', 'star']" />
							</span>
							<p class="ml-2 mr-6">品牌</p>
							<div class="flex gap-x-3">
								<p class="text-blue-primary">{{ productInfo.brand }} </p>
							</div>
						</div>
					</li>
				</ul>
				<div class="hidden md:block">
					<ProductSpec :orderSpec="orderSpec" />
				</div>
				<div class="hidden md:block">
					<ProductButtons />
				</div>
			</section>
		</div>
		<h2 class="subtitle">商品簡介</h2>
		<div class="tab-content mb-5" v-html="productDesc"></div>
		<h2 class="subtitle">商品規格</h2>
		<div class="tab-content mb-5" v-html="productSpec"></div>

		<h2 class="subtitle">相關類別</h2>
		<ul class="mb-5">
			<li v-for="category in relateCategory" :key="category.category_id">
				<ul class="flex items-center gap-4">
					<li class="text-emerald-400">
						<font-awesome-icon :icon="['fas', 'circle-dot']" />
					</li>
					<li
						v-for="(name, index) in category.category_name.split(',')"
						:class="{ 'text-gray-500': index  < category.category_name.split(',').length -1  }"
					>
						<span v-if="index !== 0" class="text-gray-400 text-sm mr-4">
							<font-awesome-icon :icon="['fas', 'chevron-right']" />
						</span>
						<span v-if="index < category.category_name.split(',').length -1">
							{{ name }}
						</span>
						<nuxt-link v-else :to="{path:'/find/category',query:{category:category.category_id}}">
							{{ name }}
						</nuxt-link>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { getProductSpecApi, getProductInfoApi } from '@/api/product';
import { ProductInfo, ShippingFee, Spec } from '@/types/product';

const route = useRoute();
const orderSpec = ref({} as Spec); //商品規格
const productInfo = ref({} as ProductInfo); //商品資訊
const productPhotos = ref([]); //商品圖
const shippingFee = ref({} as ShippingFee); //運費
const campaignInfo = ref<any>([]); //贈品、優惠
const certificate = ref<{ icon: string }[]>([]); //認證
const installments = ref([]); //分期付款
const productDesc = ref<string>(''); //商品簡介
const productSpec = ref<string>(''); //商品規格

const relateCategory = ref<{ category_id: string; category_name: 'string' }[]>(
	[]
);
const { payment, availablePayments } = usePayments();

const getProductInfo = async () => {
	const id = route.params.id;
	const data = await getProductInfoApi(id, { detail: true });
	console.log(data);

	orderSpec.value = data.result.orderSpec;
	productInfo.value = data.result.productInfo;
	productPhotos.value = data.result.productPhotos;
	shippingFee.value = data.result.shippingFee;
	campaignInfo.value = data.result.campaignInfo;
	payment.value = data.result.productInfo.payment;
	certificate.value = data.result.certificate;
	installments.value = data.result.installment_interest_rates;
	productDesc.value = data.result.productDesc;
	productSpec.value = data.result.productSpec;
	relateCategory.value = data.result.relateCategory;
};
await getProductInfo();
</script>

<style lang="scss" scoped>
:deep(.table) {
	max-width: 100% !important;
	display: block;
	* {
		color: black;
		max-width: 100% !important;
	}
	table {
		width: 100%;
		border: 1px solid #999;
		font-size: 15px;
		line-height: 23px;
		font-weight: normal;
		font-family: Helvetica;
		table-layout: fixed;
	}
	tr:first-child {
		td,
		th {
			border-top: 0px;
		}
	}
	td,
	th {
		border-top: 1px solid #999999;
	}
	td:first-child {
		background-color: #e6e6e6;
		width: 130px;
		text-align: left;
		padding: 4px 10px;
		vertical-align: top;
	}
	td {
		padding: 4px 10px;
		word-wrap: break-word;
		vertical-align: top;
	}
	th {
		background-color: #e6e6e6;
		width: 130px;
		text-align: left;
		padding: 4px 10px;
		vertical-align: top;
	}
	ul {
		padding: 0;
		margin: 0;
	}
}
:deep(.tab-content) {
	color: #000;
	ul {
		list-style: disc;
		padding-left: 1rem;
	}
	ol {
		list-style: decimal;
		padding-left: 1rem;
	}
	img {
		width: 100%;
	}
}
@media screen and (max-width: 992px) {
	:deep(.table) {
		table {
			tr {
				td:first-child {
					width: 110px;
				}
				th {
					width: 110px;
				}
			}
		}
	}
}
</style>
