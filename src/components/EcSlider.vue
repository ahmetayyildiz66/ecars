<template>
  <div class="flex items-center space-x-4">
    <button @click="prevSlide">
      <IconArrowLeft />
    </button>
    <button @click="nextSlide">
      <IconArrowRight />
    </button>
  </div>
</template>

<script lang="ts" setup>
import IconArrowRight from "./icons/IconArrowRight.vue";
import IconArrowLeft from "./icons/IconArrowLeft.vue";

const emits = defineEmits(["prev-slide", "next-slide"]);

const prevSlide = () => {
  emits("prev-slide")
}

const nextSlide = () => {
  emits("next-slide")
}
</script>
