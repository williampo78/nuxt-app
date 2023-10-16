<template>
  <div class="bg-sky-200 md:flex md:justify-center p-2 md:p-1">
    <div class="flex justify-between gap-x-[10px] w-full md:max-w-[1200px]">
      <div class="flex items-center gap-x-[10px] py-4">
        <img class="md:hidden" src="@/assets/images/hamburger.svg" alt="" />
        <NuxtLink :to="'/'" class="max-w-[180px]">
          <picture>
            <source media="(min-width:992px )" srcset="@/assets/images/logo@2x.png" sizes="" />
            <img src="@/assets/images/logo.svg" alt="" />
          </picture>
        </NuxtLink>
        <div class="hidden w-[500px] flex-shrink md:flex items-center bg-white p-1 text-green rounded">
          <input class="flex-1 border-r border-black mr-1" type="text" />
          <img class="w-[18px] h-[18px]" src="@/assets/images/input-search.svg" alt="" />
          <span class="w-8">搜尋</span>
        </div>
      </div>
      <div class="flex items-center justify-end gap-x-2">
        <div class="flex md:hidden">
          <img src="@/assets/images/search.svg" alt="" />
          <img src="@/assets/images/user.svg" alt="" />
          <img src="@/assets/images/cart.svg" alt="" />
        </div>
        <div class="hidden md:flex items-center flex-shrink-0 text-sky-900">
          <span>
            <font-awesome-icon :icon="['fa-solid', 'fa-user']" />
          </span>
          <NuxtLink :to="'/login'" class="pr-2 border-r mr-2  font-bold">
            會員登入</NuxtLink>
          <a class="mr-2" href="">註冊</a>
          <p>Hello</p>
          <img src="@/assets/images/cart-desktop.svg" alt="" />
          <a href="">購物車</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
