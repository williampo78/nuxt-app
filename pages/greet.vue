<template>
  <div>
    {{ greet }}
  </div>
</template>

<script setup>
import { ref } from "vue";
const greet = ref("hello");
</script>

<style lang="scss" scoped></style>
