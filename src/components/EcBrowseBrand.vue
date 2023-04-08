<template>
  <section class="bg-gray-50 py-8">
    <div class="container">
      <h4 class="text-3xl font-semibold mb-6">Browse by brand</h4>

      <div class="grid gap-4 grid-cols-2">
        <EcBrandCard
          v-for="brand in brands"
          :key="brand.name"
          :brand-name="brand.name"
          :image-url="brand.imageUrl"
        />
      </div>

      <p class="text-green-750 font-semibold flex items-center space-x-1 mt-4 text-sm">
        <span>See all cars</span>
        <IconArrowDown :height="20" :width="20" :fill="'#3C7D46'"/>
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import EcBrandCard from "./EcBrandCard.vue";
import IconArrowDown from "./icons/IconArrowDown.vue";

const brands = [
  {
    imageUrl: "ford.png",
    name: "Ford",
  },
  {
    imageUrl: "volkswagen.png",
    name: "Volkswagen",
  },
  {
    imageUrl: "volvo.png",
    name: "Volvo",
  },
  {
    imageUrl: "tesla.png",
    name: "Tesla",
  },
  {
    imageUrl: "lexus.png",
    name: "Lexus",
  },
  {
    imageUrl: "land-rover.png",
    name: "Land Rover",
  },
];
</script>
