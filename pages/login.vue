<template>
	<div class="flex justify-center">
		<div class="w-[794px] font-bold">
			<div
				class="flex border-b-4 border-blue-primary text-center text-white text-lg md:text-2xl"
			>
				<span class="flex-1 bg-blue-primary py-2 rounded-t-xl">會員登入</span>
				<span class="flex-1 bg-gray-100 py-2 rounded-t-xl text-gray-400"
					>會員註冊</span
				>
			</div>
			<form
				class="flex flex-col gap-3 px-[15px] pt-6 pb-[25px] mt-2 bg-gray-50 text-blue-primary md:flex-1 rounded-lg md:rounded-2xl md:py-[60px] md:px-[50px]"
				action=""
			>
				<div class="grid-input">
					<label class="text-left md:text-right" for="">手機</label>
					<div class="input-container">
						<span class="text-gray-300 mr-2">
							<font-awesome-icon :icon="['fas', 'mobile-screen']" />
						</span>
						<input type="text" class="input" placeholder="請輸入手機號碼" />
					</div>
				</div>
				<div class="grid-input">
					<label class="text-left md:text-right" for="">密碼</label>
					<div class="input-container">
						<input type="text" class="input" placeholder="請輸入密碼" />
						<span class="text-gray-300">
							<font-awesome-icon :icon="['fas', 'eye-slash']" />
						</span>
					</div>
					<small class="text-hightlight-red font-medium"
						>*請輸入8-12位半形英數字</small
					>
				</div>
				<div class="grid-input">
					<label class="text-left md:text-right" for="">驗證碼</label>
					<div class="input-container">
						<input
							class="input"
							type="text"
							placeholder="請輸入驗證碼 (不分大小寫)"
						/>
					</div>
				</div>
				<div class="grid-input">
					<div class="flex items-center gap-3 col-start-2">
						<img class="w-[160px] h-10" :src="url" alt="" />
						<font-awesome-icon :icon="['fas', 'rotate-right']" />
					</div>
				</div>
				<!-- <p class="text-black">{{ url }}</p> -->
				<button
					class="block bg-blue-primary text-white rounded w-full h-[52px] mt-[30px] mb-[15px] md:w-[calc(100%-140px)] md:mx-[70px]"
				>
					會員登入
				</button>
				<div class="flex justify-center">
					<span class="pr-[10px] mr-[10px] border-r" href="">忘記密碼</span>
					<span>忘記帳號</span>
				</div>
				<p class="text-center text-gray-400">
					還沒加入會員嗎?
					<span class="text-green-400 ml-2">
						立即註冊<font-awesome-icon :icon="['fas', 'arrow-right']" />
					</span>
				</p>
			</form>
		</div>
	</div>
</template>

<script setup>
import { getCaptchaApi } from '@/api/login';
const url = ref('');


onMounted(async () => {
	await nextTick();
	getCaptcha();
});

const getCaptcha = async () => {
	const data = await getCaptchaApi();
	url.value = data.result.img;
	console.log(data);
};
</script>

<style lang="scss" scoped>
.grid-input {
	@apply flex flex-col gap-y-2 md:grid md:grid md:grid-cols-[50px,1fr] md:mr-[70px] md:gap-x-[15px];
}
.input-container {
	@apply flex items-center bg-white border border-gray-300 rounded-lg  md:flex-1 px-4;
}
.input {
	@apply h-10 w-full bg-transparent outline-none placeholder:font-normal placeholder:opacity-50;
}
</style>
