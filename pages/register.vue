<template>
	<LoginContainer v-if="step === 1">
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
		<template #button>
			<span
				@click="goToNextStep()"
				class="flex items-center justify-center w-full h-full"
				>下一步</span
			>
		</template>
	</LoginContainer>
	<LoginVerifyOTP @confirmOTP="confirmOTP" v-if="step === 2" />

	<RegisterForm @goToNextStep="goToNextStep" v-if="step === 3" />
</template>

<script setup>
definePageMeta({
	title: 'Register',
	name: 'register',
});
const step = ref(1);
const goToNextStep = () => {
	if (step.value < 3) {
		step.value++;
	}
};
const confirmOTP = () => {
	goToNextStep();
};
</script>

<style lang="scss" scoped></style>
