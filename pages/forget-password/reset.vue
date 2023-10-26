<template>
	<LoginContainer>
		<template #title>
			<h2 class="text-center text-2xl text-black mb-6 md:mb-4">重設密碼</h2>
		</template>
		<template #message>
			<p class="text-center text-black">
				請輸入8-12字元的新密碼,密碼不要與帳號相同,您的密碼必須包含至少1個英文字碼和1的數字之半形英數字。
			</p>
		</template>
		<template #input-field>
			<div class="my-6 md:mt-12">
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
					<label class="text-left md:text-right" for="">確認密碼</label>
					<div class="input-container">
						<input
							:type="passwordShown ? 'text' : 'password'"
							class="input"
							placeholder="請再次輸入密碼"
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
			</div>
		</template>
		<template #button>
			<span class="block w-full"> 確認 </span>
		</template>
		<template #bottom-message>
			<div
				class="flex w-full items-center p-3 text-center text-emerald-400 border-2 border-emerald-400 rounded-lg"
			>
				<span><font-awesome-icon :icon="['fas', 'circle-exclamation']" /></span>
				<span class="text-left ml-2">
					成功重設密碼後，您現有的密碼將會失效，請使用新密碼進行登入！
				</span>
			</div>
		</template>
	</LoginContainer>
</template>

<script setup lang="ts">
definePageMeta({
	title: 'Reset Password',
	name: 'reset-password',
});

const passwordShown = ref<boolean>(false);
</script>

<style lang="scss" scoped></style>
