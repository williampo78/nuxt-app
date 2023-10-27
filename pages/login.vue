<template>
	<LoginContainer>
		<template #input-field>
			<div class="grid-input mb-3 md:mb-6">
				<label class="text-left md:text-right" for="">手機</label>
				<div class="input-container">
					<span class="text-gray-300 mr-2">
						<font-awesome-icon :icon="['fas', 'mobile-screen']" />
					</span>
					<input type="tel" class="input" placeholder="請輸入手機號碼" />
				</div>
			</div>
			<div class="grid-input">
				<label class="text-left md:text-right" for="">密碼</label>
				<div class="input-container">
					<input
						:type="passwordShown ? 'text' : 'password'"
						class="input"
						placeholder="請輸入密碼"
					/>
					<span
						@click="passwordShown = !passwordShown"
						class="text-gray-300 cursor-pointer"
					>
						<font-awesome-icon
							v-if="!passwordShown"
							:icon="['fas', 'eye-slash']"
						/>
						<font-awesome-icon v-if="passwordShown" :icon="['fas', 'eye']" />
					</span>
				</div>
			</div>
			<div class="grid-input mb-3">
				<span> </span>
				<small class="text-hightlight-red font-medium text-sm"
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
					<img class="w-[160px] h-10" :src="captchaUrl" alt="" />
					<font-awesome-icon :icon="['fas', 'rotate-right']" />
				</div>
			</div>
		</template>

		<template #button>
			<span
				@click="openModalHandler()"
				class="flex items-center justify-center w-full h-full"
			>
				會員登入
			</span>
		</template>
		<template #bottom-message>
			<div class="flex justify-center">
				<RouterLink
					to="/forget-password"
					class="pr-[10px] mr-[10px] border-r"
					href=""
					>忘記密碼</RouterLink
				>
				<span>忘記帳號</span>
			</div>
			<p class="text-center text-gray-400">
				還沒加入會員嗎?
				<span class="text-emerald-400 ml-2">
					立即註冊<font-awesome-icon :icon="['fas', 'arrow-right']" />
				</span>
			</p>
		</template>
	</LoginContainer>
</template>

<script setup lang="ts">
import { getCaptchaApi } from '@/api/login';

const modalStore = useModal();
definePageMeta({
	title: <string>'Login',
	name: <string>'login',
});

const captchaUrl = ref<string>('');
const passwordShown = ref<boolean>(false);

onMounted(async () => {
	await nextTick();
	getCaptcha();
});

const getCaptcha = async () => {
	const data = await getCaptchaApi();
	captchaUrl.value = data.url.img;
};

const openModalHandler = () => {
	modalStore.openModal({
		type: 'simple',
		icon: 'success',
		message:'登入成功'
	});
};
</script>

<style lang="scss" scoped>
.grid-input {
	@apply flex flex-col  gap-y-1 md:grid  md:grid-cols-[50px,1fr] md:items-center md:gap-x-[15px];
}
.input-container {
	@apply flex items-center bg-white border border-gray-300 rounded-lg  md:flex-1 px-4;
}
.input {
	@apply h-10 w-full bg-transparent outline-none placeholder:font-normal placeholder:opacity-50;
}
</style>
