<template>
	<LoginVerifyOTP @confirmOTP="confirmOTP" />
</template>

<script setup>
definePageMeta({
	title: 'Verify OTP',
	name: 'verify-otp',
});
const router = useRouter();

const confirmOTP = () => {
	router.push({ name: 'reset-password' });
};
</script>

<style lang="scss" scoped></style>
