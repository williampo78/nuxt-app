<template>
	<div class="flex flex-col gap-5">
		<!-- 點數 -->
		<PointsBrief />
		<!-- 會員資訊 -->
		<div class="flex flex-col gap-5 md:flex-row-reverse md:gap-8">
			<div
				class="flex-1 border border-blue-forth rounded-2xl overflow-hidden shadow-md"
			>
				<img :src="memberStore.memberLevel.img" alt="" class="w-full" />
			</div>
			<div
				class="min-h-[220px] flex-1 border border-blue-forth rounded-2xl overflow-hidden bg-member-card bg-cover shadow-md flex flex-col gap-8 justify-center items-center"
			>
				<div
					v-if="memberStore.memberGroup[0]"
					class="relative text-center py-2 w-32 flex justify-center items-center"
				>
					<img
						src="@/assets/images/member-badge.svg"
						alt="會員等級圖示"
						class="absolute h-full w-full left-0 top-0"
					/>
					<span class="z-[2] text-sm">{{
						memberStore.memberGroup[0].name
					}}</span>
				</div>
				<div class="flex items-center">
					<p class="text-4xl">{{ memberStore.memberInfo.name }}</p>
					<span
						class="py-1.5 px-3 bg-emerald-400 rounded-full text-xs text-white ml-2"
						>{{ memberStore.memberLevel.name }}</span
					>
				</div>
				<div class="text-center text-gray-500 font-medium">
					<p class="leading-8">
						<font-awesome-icon :icon="['fas', 'phone']" class="mr-2" />
						{{ formattedMobile(memberStore.memberInfo.mobile) }}
					</p>
					<p>
						<font-awesome-icon :icon="['fas', 'envelope']" class="mr-2" />
						{{ memberStore.memberInfo.email }}
					</p>
				</div>
			</div>
		</div>
		<!-- 防詐騙提醒 -->
		<div class="border-4 bg-emerald-400 border-emerald-400 rounded-xl overflow-hidden">
			<div class="bg-amber-50 p-5 flex flex-col md:px-16 md:flex-row">
				<div
					class="flex-1 text-emerald-400 flex flex-col items-center gap-x-2 md:flex-row md:gap-5"
				>
					<span class="text-[64px] md:text-8xl">
						<font-awesome-icon :icon="['fas', 'triangle-exclamation']" />
					</span>
					<div class="mb-3 md:mb-0">
						<p
							class="text-3xl tracking-[8px] md:text-5xl md:tracking-[6px] md:mb-2"
						>
							NOTICE
						</p>
						<p class="text-lg tracking-[15px] md:text-3xl"> 防詐騙提醒 </p>
					</div>
				</div>
				<div class="flex-1">
					<p
						class="text-center py-1 px-3 mb-2 bg-emerald-400 rounded-md text-white md:inline-block"
					>
						溫馨提醒，本公司不會有下列行為：
					</p>
					<ul>
						<li
							v-for="notice in noiceList"
							:key="notice"
							class="leading-6 flex"
						>
							<span class="text-emerald-400 mr-2">
								<font-awesome-icon :icon="['fas', 'circle-xmark']" />
							</span>
							<span>{{ notice }}</span>
						</li>
					</ul>
				</div>
			</div>
			<div
				class="py-2 text-amber-50 text-center text-sm md:text-base"
			>
				<p>
					如有疑慮,請來電客服專線:0800-111-222 <br />
					或撥打警用電話 165 反詐騙專線諮詢
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const { formattedMobile } = useFormat();
const memberStore = useMember();

const noiceList = ref<string[]>([
	'不會於下班時間與您聯繫',
	'不會主動電話通知要求變更付款方式或內容',
	'不會主動要求客戶告知帳號或至 ATM 操作退款',
	'不會主動要求客戶提供信用卡資料或變更分期付款',
	'不會以電話方式提供優惠券或舉辦團購、招募會員',
]);

const memberInfo = computed(() => {
	return memberStore.memberInfo;
});
</script>

<style scoped></style>
