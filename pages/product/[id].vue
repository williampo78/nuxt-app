<template>
	<div class="w-full max-w-[1200px]">
		<Nav />
		<div class="mt-4 gap-x-5 md:flex">
			<section class="flex justify-center">
				<img v-if="productPhotos.length" :src="productPhotos[0]" alt="" />
				<img v-else src="@/assets/images/image-52.png" alt="" />
			</section>
			<section class="flex-1">
				<p class="text-pink-secondary mt-4 mb-3">會員再享95折 </p>
				<h5 class="text-lg text-blue-primary">
					{{ productInfo.product_name }}
				</h5>
				<div class="flex items-center gap-x-5 my-4">
					<img src="@/assets/images/image-53.png" alt="" />
					<img src="@/assets/images/image-54.png" alt="" />
				</div>
				<ul class="list-disc text-sm ml-5 font-medium">
					<li>健康食品雙認證 </li>
					<li>本產品非素食，不含球腸菌</li>
					<li>立攝適穩優Glucosmart桑葉水淬餐拌粉</li>
				</ul>
				<div class="py-4 border-y-2 border-gray-200 my-4">
					<p class="text-gray-500"
						>特價
						<span class="text-red text-3xl ml-6 mr-4">
							<sub class="text-xs">$</sub>{{ productInfo.selling_price }}
						</span>
						<sub class="text-gray-400 text-xs font-medium line-through">
							{{ productInfo.list_price }}
						</sub>
					</p>
				</div>
				<ul
					class="px-2 pb-4 flex flex-col gap-y-3 border-b-2 border-gray-200 my-4"
				>
					<li class="flex justify-between">
						<div class="text-gray-500 flex items-center">
							<span class="w-[22px]">
								<font-awesome-icon :icon="['fas', 'tag']" />
							</span>
							<p class="ml-2 mr-6">優惠</p>
							<div class="flex gap-x-3">
								<span
									class="text-sm text-pink-secondary border-2 border-pink-secondary rounded-md px-3"
									>買一送一</span
								>
								<span
									class="text-sm text-pink-secondary border-2 border-pink-secondary rounded-md px-3"
									>商品85折</span
								>
							</div>
						</div>
						<span class="text-emerald-400">
							<font-awesome-icon :icon="['fas', 'chevron-right']" />
						</span>
					</li>
					<li class="flex justify-between">
						<div class="text-gray-500 flex items-center">
							<span class="w-[22px]">
								<font-awesome-icon :icon="['fas', 'gift']" />
							</span>
							<p class="ml-2 mr-6">贈品</p>
							<div class="flex gap-x-3">
								<p class="text-blue-primary"> 買就送即食紅棗一盒 </p>
							</div>
						</div>
						<span class="text-emerald-400">
							<font-awesome-icon :icon="['fas', 'chevron-right']" />
						</span>
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
									<sub class="ml-3 text-xs font-normal text-gray-400"
										>未滿 $900 運費 $80</sub
									>
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
							<div class="flex gap-x-3">
								<p class="text-blue-primary"> 信用卡/Line Pay </p>
							</div>
						</div>
					</li>
					<li class="flex justify-between">
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
			</section>
		</div>
	</div>
</template>

<script setup>
import { getProductSpecApi, getProductInfoApi } from '@/api/product';
const route = useRoute();
const orderSpec = ref({});
const productInfo = ref({});
const productPhotos = ref([]);

const getProductSpec = async () => {
	const id = route.params.id;
	const data = await getProductInfoApi(id);
	console.log(data);
	orderSpec.value = data.result.orderSpec;
	productInfo.value = data.result.productInfo;
	productPhotos.value = data.result.productPhotos;
};
getProductSpec();
</script>

<style scoped></style>
