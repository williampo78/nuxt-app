<template>
	<div class="mb-6">
		<!-- <Breadcrumb /> -->
		<div class="flex gap-4">
			<FindSidebar class="hidden md:block" />
			<div class="flex-1">
				<FindFilter />
				<FindPanel />
				<FindProducts />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
