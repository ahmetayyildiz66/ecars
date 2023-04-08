<template>
  <section class="pt-8 pb-8 relative">
    <div class="container flex items-center justify-between">
      <h4 class="text-3xl font-semibold mb-6">Special offers</h4>

      <div class="hidden pb-4 md:flex items-center">
        <EcSlider @prev-slide="prevSlide" @next-slide="nextSlide" />

        <EcAllCars class="ml-6" />
      </div>
    </div>

    <div
      class="flex lg:container space-x-4 overflow-hidden pb-2 mb-5 md:mb-0"
      :class="[{ 'ml-4': index === 0 }]"
    >
      <EcOfferCard
        v-for="(car, i) in cars"
        :key="car.src"
        :src-url="car.src"
        :style="{ transform: `translateX(-${index * 100}%)` }"
        class="transition-all duration-300 ease-in-out"
        :class="[{ 'opacity-25': isBlurry(i) }]"
      />
    </div>

    <div class="container md:hidden flex items-center justify-between">
      <EcSlider @prev-slide="prevSlide" @next-slide="nextSlide" />

      <EcAllCars />
    </div>
  </section>
</template>

<script lang="ts" setup>
// ref
import { ref } from "vue";

// composables
import { useIsMobile } from "../composables/useMediaQuery";

// icons
import EcOfferCard from "./EcOfferCard.vue";
import EcAllCars from "./EcAllCars.vue";
import EcSlider from "./EcSlider.vue";

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
    index.value = cars.length - 1;
  }
};

const nextSlide = () => {
  index.value++;
  if (index.value >= cars.length) {
    index.value = 0;
  }
};

const isBlurry = (i: number) => {
  if (useIsMobile.value === "mobile") {
    return i !== index.value;
  } else if (useIsMobile.value === "tablet") {
    return i !== index.value && index.value + 1 !== i;
  }
  return (i + 1) % 5 === 0;
};
</script>
