<template>
  <div>
    <EcTopbar />
    <div class="border-b">
      <EcHeader />
    </div>

    <EcHero />

    <div class="border-b pb-8">
      <EcBenefitsList class="shrink-0" />
    </div>

    <EcCarouselSlider>
      <template #header>
        <h4 class="text-3xl font-semibold mb-6">Special offers</h4>
      </template>

      <template #tabletDesktopSlider>
        <EcSlider @prev-slide="prevSlide" @next-slide="nextSlide" />

        <EcAllCars class="ml-6" />
      </template>

      <template #default>
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
      </template>

      <template #footer>
        <EcSlider @prev-slide="prevSlide" @next-slide="nextSlide" />

        <EcAllCars />
      </template>
    </EcCarouselSlider>

    <EcBrowseBrand />

    <EcInquiry />

    <div class="border-b">
      <EcHowWorks />
    </div>

    <EcWhyUs />

    <EcReviews />

    <EcBlog />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useIsMobile } from "./composables/useMediaQuery";

import EcHeader from "./layouts/EcHeader.vue";
import EcTopbar from "./layouts/EcTopbar.vue";
import EcHero from "./components/EcHero.vue";
import EcBenefitsList from "./components/EcBenefitsList.vue";
import EcBrowseBrand from "./components/EcBrowseBrand.vue";
import EcInquiry from "./components/EcInquiry.vue";
import EcHowWorks from "./components/EcHowWorks.vue";
import EcWhyUs from "./components/EcWhyUs.vue";
import EcCarouselSlider from "./components/EcCarouselSlider.vue";
import EcSlider from "./components/EcSlider.vue";
import EcAllCars from "./components/EcAllCars.vue";
import EcOfferCard from "./components/EcOfferCard.vue";
import EcReviews from "./components/EcReviews.vue";
import EcBlog from "./components/EcBlog.vue";

const isBlurry = (i: number) => {
  if (useIsMobile.value === "mobile") {
    return i !== index.value;
  } else if (useIsMobile.value === "tablet") {
    return i !== index.value && index.value + 1 !== i;
  }
  return (i + 1) % 5 === 0;
};

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
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

body {
  font-family: "Inter", sans-serif;
  background-color: "#F6F5F4";
}
</style>
