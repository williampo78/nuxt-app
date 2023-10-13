<template>
  <div class="md:flex justify-center">
    <div class="flex justify-center md:justify-start w-full max-w-[1200px]">
      <div class="hidden md:block flex-shrink-0 mr-[-15%]">
        <img src="@/assets/images/pic-pharmacy.png" alt="" />
      </div>
      <form
        class="px-[15px] pt-[30px] pb-[25px] bg-white w-full sm:w-[80%] md:flex-1 md:max-w-[620px] sm:border border-silver sm:rounded md:py-[60px] md:px-[50px]"
        action=""
      >
        <h3 class="text-xl mb-5 font-bold">會員登入</h3>

        <div class="grid-input">
          <label class="text-left md:text-right" for="">手機</label>
          <input class="border rounded h-10 md:flex-1" type="text" />
        </div>
        <div class="grid-input">
          <label class="text-left md:text-right" for="">密碼</label>
          <input class="border rounded h-10 md:flex-1" type="text" />
        </div>
        <div class="grid-input">
          <label class="text-left md:text-right" for="">驗證碼</label>
          <input class="border rounded h-10 md:flex-1" type="text" />
        </div>
        <div class="grid-input">
          <div class="flex gap-3 col-start-2">
            <img src="@/assets/images/captcha.png" alt="" />
            <img src="@/assets/images/btn-refresh.svg" alt="" />
          </div>
        </div>
        <button
          class="block bg-green text-white h-10 rounded w-full mt-[30px] mb-[15px] md:w-[calc(100%-140px)] md:mx-[70px]"
        >
          登入
        </button>
        <div class="flex justify-center">
          <a
            class="text-green font-bold pr-[10px] mr-[10px] border-r border-green"
            href=""
            >忘記密碼</a
          >
          <p>我還不是會員，</p>
          <a class="flex text-green font-bold" href=""
            >加入會員
            <img src="@/assets/images/btn-next.svg" alt="" />
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { getCaptchaApi } from "@/api/login";
onMounted(() => {
  getCaptcha();
});

const getCaptcha = async () => {
  const data = await getCaptchaApi();
  console.log(data.url);
};
</script>

<style lang="scss" scoped>
.grid-input {
  @apply flex flex-col my-4 gap-y-2 md:grid md:grid md:grid-cols-[50px,1fr] md:mr-[70px] md:gap-x-[15px];
}
</style>
