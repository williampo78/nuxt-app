<template>
	<div>
		<div class="px-5 bg-blue-primary text-white flex justify-center">
			<div
				class="flex justify-center py-4 w-full md:max-w-[1200px] md:justify-between md:py-[30px]"
			>
				<div class="flex flex-col md:mr-[100px]">
					<div class="flex justify-center">
						<img
							class="w-[27px] md:w-[45px]"
							src="@/assets/images/logo-footer-1.svg"
							alt=""
						/>
						<img
							class="w-[80px] md:w-[140px]"
							src="@/assets/images/logo-footer-2.svg"
							alt=""
						/>
					</div>
					<ul class="my-4 flex text-white justify-center text-sm md:hidden">
						<li class="px-3 border-r border-white">關於我們</li>
						<li class="px-3 border-r border-white">購物流程</li>
						<li class="px-3 border-r border-white">會員中心</li>
						<li class="px-3">客服中心</li>
					</ul>
					<div class="text-center text-[10px] md:mt-4 md:text-sm">
						<p>統一編號: 27731537</p>
						<p class="mt-2 mb-4">春天藥品股份有限公司</p>
					</div>
					<div class="flex justify-center gap-4">
						<font-awesome-icon :icon="['fab', 'square-facebook']" />
						<font-awesome-icon :icon="['fab', 'line']" />
						<font-awesome-icon :icon="['fab', 'instagram']" />
						<font-awesome-icon :icon="['fab', 'youtube']" />
					</div>
				</div>
				<div class="hidden md:flex flex-1 text-[13px]">
					<dl class="flex-1 text-left">
						<dt class="text-[18px] font-bold">關於我們</dt>
						<dd class="my-1">春天官網</dd>
						<dd class="my-1">品牌精神</dd>
						<dd class="my-1">門市當月活動</dd>
						<dd class="my-1">門市據點</dd>
						<dd class="my-1">人才招募</dd>
					</dl>
					<dl class="flex-1 text-left">
						<dt class="text-[18px] font-bold">購物流程</dt>
						<dd class="my-1">購物說明</dd>
						<dd class="my-1">運費及配送</dd>
						<dd class="my-1">免責聲明</dd>
						<dd class="my-1">付款方式</dd>
					</dl>
					<dl class="flex-1 text-left">
						<dt class="text-[18px] font-bold">會員專區</dt>
						<dd class="my-1">註冊流程</dd>
						<dd class="my-1">會員制度</dd>
						<dd class="my-1">會員點數使用規則</dd>
						<dd class="my-1">隱私權政策</dd>
						<dd class="my-1">會員服務條款</dd>
					</dl>
					<dl class="flex-1 text-left">
						<dt class="text-[18px] font-bold">客服中心</dt>
						<dd class="my-1">退換貨須知</dd>
						<dd>問題Q&A</dd>
						<dd class="my-1">防詐騙宣導</dd>
						<dd class="my-1">與我們聯繫</dd>
						<dd class="my-1">大宗採購/新品提報</dd>
					</dl>
				</div>
			</div>
		</div>
		<div
			class="text-[10px] md:text-base py-2 text-center text-blue-primary font-bold"
		>
			<p>Copyright © 2023 春天藥局.</p>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
