<template>
	<div class="min-h-[100vh] flex flex-col justify-between">
		<Header />
		<div class="px-3 my-4">
			<slot />
		</div>
		<Footer />
		<!-- <div>This is the layout of the whole app</div> -->
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
