<template>
  <div class="bg-sky-200 flex justify-center p-2 md:p-1 text-sky-900 font-bold">
    <div class="flex justify-between items-center w-full md:max-w-[1200px]">
      <div class="flex items-center gap-x-[10px] py-4">
        <img class="md:hidden" src="@/assets/images/hamburger.svg" alt="" />
        <NuxtLink :to="'/'" class="max-w-[180px]">
          <picture>
            <source media="(min-width:992px )" srcset="@/assets/images/logo@2x.png" sizes="" />
            <img src="@/assets/images/logo.svg" alt="" />
          </picture>
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
      <div class="flex items-center justify-end gap-x-2 ">
        <div class="flex md:hidden">
          <img src="@/assets/images/search.svg" alt="" />
          <img src="@/assets/images/user.svg" alt="" />
          <img src="@/assets/images/cart.svg" alt="" />
        </div>
        <div class="hidden md:flex items-center flex-shrink-0">
          <span class="mr-2">
            <font-awesome-icon :icon="['fa-solid', 'fa-user']" />
          </span>
          <NuxtLink :to="'/login'" class="pr-2 border-r mr-2">
            會員登入</NuxtLink>
          <a class="mr-2" href="">註冊</a>
          <img src="@/assets/images/cart-desktop.svg" alt="" />
          <a href="">購物車</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
