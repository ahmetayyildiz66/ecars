<template>
  <section class="pt-8 relative">
    <h4 class="container text-3xl font-semibold mb-6">Special offers</h4>

    <div class="flex space-x-4 overflow-hidden pb-2 mb-5" :class="[{'ml-4': index === 0}]">
      <EcOfferCard
        v-for="(car, i) in cars"
        :key="car.src"
        :src-url="car.src"
        :style="{ transform: `translateX(-${index * 100}%)` }"
        class="transition-all duration-300 ease-in-out"
        :class="{'opacity-25': index !== i}"
      />
    </div>

    <div class="container mb-20 pb-4 flex items-center justify-between">
      <p class="flex items-center space-x-4">
        <button @click="prevSlide">
          <IconArrowLeft />
        </button>
        <button @click="nextSlide">
          <IconArrowRight />
        </button>
      </p>
      <p class="text-green-750 font-semibold flex items-center space-x-1">
        <span>See all cars</span>
        <IconExpand />
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import EcOfferCard from "./EcOfferCard.vue";
import IconArrowRight from "./icons/IconArrowRight.vue";
import IconArrowLeft from "./icons/IconArrowLeft.vue";
import IconExpand from "./icons/IconExpand.vue";
import { ref } from "vue";

const cars = [
  { src: "genesis.png" },
  { src: "cruiser.png" },
  { src: "cruiser300.png" },
  { src: "corolla.png" },
  { src: "prado.png" },
];

const index = ref(0);

const prevSlide = () => {
  index.value--;
  if (index.value < 0) {
    index.value = cars.length -1
  }
};

const nextSlide = () => {
  index.value++
  if (index.value >= cars.length) {
    index.value = 0
  }
};
</script>
