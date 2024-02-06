<template>
	<div class="bg-white py-6 px-3 md:mx-[-12px]">
		<div class="max-w-[1200px] mx-auto">
			<div class="flex justify-between text-blue-primary">
				<h2 class="text-2xl mb-3"
					><span class="mr-3"
						><font-awesome-icon :icon="['fas', 'pen-nib']" /></span
					>好文開箱</h2
				>
				<!-- <nuxt-link to="/" class="text-o"
					>查看更多 <font-awesome-icon :icon="['fas', 'chevron-right']"
				/></nuxt-link> -->
			</div>
			<div class="flex gap-x-2 justify-between w-full overflow-auto md:gap-0">
				<div
					v-for="i in 3"
					:key="i"
					class="md:w-[390px] p-4 bg-yellow-forth flex gap-x-4 rounded-2xl flex-shrink-0"
				>
					<img
						class="w-[140px] md:max-w-[170px]"
						src="@/assets/images/image-44.png"
						alt=""
					/>
					<div class="w-[170px] flex-shrink-0">
						<p class="text-blue-primary">缺3種營養 小病變重症</p>
						<p class="text-xs text-gray-400 my-4 font-medium">
							「有慢性病可以吃成藥嗎?」、「我對藥物過敏嗎?」根據2022博思市調公司針對國人自我照護習慣調查指出,九成台灣民眾曾生病卻置之不理...
						</p>
						<button
							class="py-1.5 px-3 bg-blue-primary text-white text-xs rounded-full"
						>
							<nuxt-link to="/"
								>more<font-awesome-icon
									class="ml-1"
									:icon="['fas', 'arrow-right']"
							/></nuxt-link>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
