<template>
  <div class="bg-sky-200 flex justify-center py-2 px-5 md:p-0 text-sky-900 font-bold relative md:min-h-[120px]">
    <div class="flex justify-between items-center w-full md:max-w-[1200px] z-[1]">
      <div class="flex items-center gap-x-[10px] md:py-4">
        <span class="text-[22px] md:hidden">
          <font-awesome-icon :icon="['fas', 'bars']" />
        </span>
        <NuxtLink :to="'/'" class="max-w-[180px]">
          <!-- <picture>
            <source media="(min-width:992px )" srcset="@/assets/images/logo@2x.png" sizes="" />
            <img src="@/assets/images/logo.svg" alt="" />
          </picture> -->
          <img class="w-[95px] md:w-[210px]" src="@/assets/images/logo.png" alt="">
        </NuxtLink>
      </div>
      <div>
        <div
          class="hidden w-[500px] h-10 flex-shrink md:flex items-center bg-white p-1 border-2 border-sky-900 rounded-lg">
          <input class="flex-1 border-r border-black outline-none mr-1" type="text" placeholder="輸入想搜尋的商品" />
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
          <span class="w-8 mx-2">搜尋</span>
        </div>
        <ul class="hidden md:flex gap-1 text-sm mt-1">
          <li>益生菌</li>
          <li>益生菌</li>
          <li>益生菌</li>
        </ul>
      </div>
      <div class="flex items-center justify-end gap-x-2">
        <div class="flex items-center gap-5 md:hidden text-xl">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
          <font-awesome-icon :icon="['fa-solid', 'fa-user']" />
          <font-awesome-icon :icon="['fas', 'cart-shopping']" />
        </div>
        <div class="hidden md:flex items-center flex-shrink-0">
          <span class="mr-2">
            <font-awesome-icon :icon="['fa-solid', 'fa-user']" />
          </span>
          <NuxtLink :to="'/login'" class="pr-2 border-r mr-2">
            會員登入</NuxtLink>
          <NuxtLink class="mr-2" to="/">註冊</NuxtLink>
          <NuxtLink to="/">
            <span>
              <font-awesome-icon :icon="['fas', 'cart-shopping']" />
            </span>
            購物車
          </NuxtLink>
        </div>
      </div>
    </div>
    <img class="hidden md:block fixed right-0 z-0" src="@/assets/images/homepage-right-top.png" alt="">
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
