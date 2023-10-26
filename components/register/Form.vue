import { Input } from 'postcss'; import { LoginContainer } from
'#build/components';
<template>
	<LoginContainer>
		<template #input-field>
			<div class="grid-input mb-3 md:mb-6">
				<label class="text-left md:text-right" for="name">姓名</label>
				<div class="input-container relative">
					<span class="text-gray-300 mr-2">
						<font-awesome-icon :icon="['fas', 'user']" />
					</span>
					<input id="name" type="text" class="input" />
					<span class="required-hint">必填</span>
				</div>
			</div>
			<div class="grid-input mb-3 md:mb-6">
				<label class="text-left md:text-right" for="phone">手機</label>
				<div class="input-container !bg-gray-100">
					<span class="text-gray-300 mr-2">
						<font-awesome-icon :icon="['fas', 'mobile-screen']" />
					</span>
					<input id="phone" type="tel" class="input" disabled />
				</div>
			</div>
			<div class="grid-input mb-3 md:mb-6">
				<span class="text-left md:text-right">性別</span>
				<div class="flex text-black">
					<input id="male" class="mr-2" type="radio" name="gender" value="1"/>
					<label class="mr-4" for="male">生理男</label>
					<input class="mr-2" id="female" type="radio" name="gender" value="0"/>
					<label for="female">生理女</label>
				</div>
			</div>

			<div class="grid-input mb-3 md:mb-6">
				<label
					@click="changeInputType()"
					class="text-left md:text-right"
					for="birth"
					>生日</label
				>
				<div class="input-container relative">
					<span class="text-gray-300 mr-2">
						<font-awesome-icon :icon="['fas', 'calendar-days']" />
					</span>
					<input
						@click="changeInputType()"
						id="birth"
						:type="birthInputType"
						class="input"
						placeholder="請選擇出生日期"
					/>
					<span class="required-hint">必填</span>
				</div>
			</div>
			<div class="grid-input mb-3 md:mb-6">
				<label class="text-left md:text-right" for="emal">E-mail</label>
				<div class="input-container relative">
					<span class="text-gray-300 mr-2">
						<font-awesome-icon :icon="['fas', 'envelope']" />
					</span>
					<input id="email" type="email" class="input" />
					<span class="required-hint">必填</span>
				</div>
			</div>
			<div class="grid-input">
				<label class="text-left md:text-right" for="">密碼</label>
				<div class="input-container relative">
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
					<span class="required-hint">必填</span>
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
				<div class="input-container relative">
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
					<span class="required-hint">必填</span>
				</div>
			</div>

			<div class="grid-input md:mt-12">
				<span></span>
				<span class="flex">
					<input type="checkbox" id="" class="mr-2" />
					<label for=""
						>我已詳細閱讀並同意春天藥局
						<NuxtLink :to="{ name: 'register' }" class="text-emerald-400">
							隱私權政策
						</NuxtLink>
						及
						<NuxtLink :to="{ name: 'register' }" class="text-emerald-400">
							服務條款
						</NuxtLink></label
					>
				</span>
			</div>
		</template>

		<template #button>
			<span class="flex items-center justify-center w-full h-full">確認</span>
		</template>
	</LoginContainer>
</template>

<script setup lang="ts">
const birthInputType = ref('text');
const passwordShown = ref(false);
const changeInputType = () => {
	birthInputType.value = 'datetime-local';
};
</script>

<style scoped>
.required-hint {
	@apply absolute top-[-25px] right-0 text-hightlight-red text-xs font-normal;
}
</style>
