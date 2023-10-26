<template>
	<LoginContainer>
		<template #title>簡訊認證</template>
		<template #message>
			<p class="mb-6 md:mb-12 text-black md:text-center">
				我們已經驗證碼透過簡訊方式記送到您的手機 0921****78,
				<br class="hidden md:block" />
				請在下方輸入驗證碼。
			</p>
		</template>

		<template #input-field>
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
		</template>
		<template #button>
			<NuxtLink
				:to="{ name: 'reset-password' }"
				class="flex w-full h-full justify-center items-center"
				>確認</NuxtLink
			>
		</template>
		<template #bottom-message>
			<p class="text-center">
				<span to="/login" class="text-emerald-400 ml-2">
					重新發送簡訊驗證碼
					<font-awesome-icon :icon="['fas', 'rotate-right']" />
				</span>
				180s
			</p>
		</template>
	</LoginContainer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
