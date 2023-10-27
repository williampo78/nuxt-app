<template>
	<div class="flex justify-center items-center fixed w-full h-full bg-black/[0.3] z-50">
		<div class="flex flex-col items-center py-6 px-8 gap-5 bg-white opacity-100 rounded-2xl">
			<div class="flex justify-center items-center w-[62px] h-[62px] rounded-full bg-green-50">
				<div class="flex justify-center items-center w-10 h-10 rounded-full bg-green-100">
                    <span class="text-green-400 text-2xl">
                        <font-awesome-icon :icon="['fas', 'circle-check']" />
                    </span>
                </div>
			</div>
            <p class="text-xl font-bold">{{modalStore.title}}</p>
		</div>
	</div>
</template>

<script setup>
const modalStore = useModal()
</script>

<style lang="scss" scoped></style>
