<template>
	<div>
		<div class="px-5 bg-blue-primary text-white flex justify-center">
			<div
				class="flex justify-center py-4 w-full md:max-w-[1200px] md:justify-between md:py-[30px]"
			>
				<div class="flex flex-col md:mr-[100px]">
					<div class="flex justify-center">
						<img
							class="w-[27px] md:w-[45px]"
							src="@/assets/images/logo-footer-1.svg"
							alt=""
						/>
						<img
							class="w-[80px] md:w-[140px]"
							src="@/assets/images/logo-footer-2.svg"
							alt=""
						/>
					</div>
					<ul class="my-4 flex text-white justify-center text-sm md:hidden">
						<li
							v-for="field in footerList"
							:key="field.field_id"
							class="px-3 border-r border-white last:border-none"
						>
							{{ field.field_value }}</li
						>
					</ul>
					<div class="text-center text-[10px] md:mt-4 md:text-sm">
						<p>統一編號: 27731537</p>
						<p class="mt-2 mb-4">春天藥品股份有限公司</p>
					</div>
					<div class="flex justify-center gap-4">
						<font-awesome-icon :icon="['fab', 'square-facebook']" />
						<font-awesome-icon :icon="['fab', 'line']" />
						<font-awesome-icon :icon="['fab', 'instagram']" />
						<font-awesome-icon :icon="['fab', 'youtube']" />
					</div>
				</div>
				<div class="hidden md:flex flex-1 text-[13px]">
					<dl
						v-for="field in footerList"
						:key="field.field_id"
						class="flex-1 text-left"
					>
						<dt class="text-[18px] font-bold">{{ field.field_value }}</dt>
						<dd
							v-for="item in field.field_items"
							:key="item.content_url"
							class="my-1"
						>
							<nuxt-link
								v-if="item.content_target === 'S'"
								:to="item.content_url"
							>
								{{ item.content_name }}
							</nuxt-link>
							<nuxt-link
								v-if="item.content_target === 'H'"
								:to="`/customer-service/${item.content_id} `"
							>
								{{ item.content_name }}
							</nuxt-link>
							<a
								v-else-if="item.content_target === 'B'"
								:href="item.content_url"
								target="_blank"
								:aria-label="item.content_name"
							>
								<span class="cursor-pointer md:hover:text-sub-title-yellow">{{
									item.content_name
								}}</span>
							</a>
						</dd>
					</dl>
				</div>
			</div>
		</div>
		<div
			class="text-[10px] md:text-base py-2 text-center text-blue-primary font-bold"
		>
			<p>Copyright © 2023 春天藥局.</p>
		</div>
	</div>
</template>

<script setup lang="ts">
const footerStore = useFooter();

await footerStore.getFooter();

const footerList = computed(() => {
	return footerStore.footerList;
});

</script>

<style lang="scss" scoped></style>
