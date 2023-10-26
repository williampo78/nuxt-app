<template>
	<LoginContainer>
		<template #title>忘記密碼</template>
		<template #button>
			<span class="block w-full" @click="nextStep()"> 下一步 </span>
		</template>
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
		</template>
		<template #bottom-message>
			<p class="text-center">
				返回
				<NuxtLink to="/login" class="text-emerald-400 ml-2">
					會員登入<font-awesome-icon :icon="['fas', 'arrow-right']" />
				</NuxtLink>
			</p>
		</template>
	</LoginContainer>
</template>

<script setup>
const router = useRouter();
const nextStep = () => {
	router.push({ name: 'verify-otp' });
};
</script>

<style lang="scss" scoped></style>
