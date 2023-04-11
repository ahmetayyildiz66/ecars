<template>
  <div class="text-sm space-y-4">
    <EcCard v-for="car in store.getCars" :key="car.id">
      <template #header>
        <img
          :src="getImageUrl(car.imageUrl)"
          alt="Cruiser Toyota"
          class="w-full h-[300px] object-fill md:w-auto md:max-w-[300px] rounded-tr-lg rounded-tl-lg md:h-full md:rounded-tr-none md:rounded-bl-lg"
        />
      </template>

      <template #default>
        <h6 class="text-gray-950 flex space-x-3 text-base justify-between">
          <p>{{ car.model }}</p>
          <button class="block h-4 w-5">
            <IconHeart />
          </button>
        </h6>
        <p class="mt-1 text-sm text-gray-550 space-x-4">
          <span>{{ car.city }}</span>
          <span class="relative before:absolute before:w-1 before:h-1 before:bg-gray-550 before:rounded-full before:top-[7px] before:-left-3">
            {{ car.isNew ? 'NEW' : 'Used' }}
          </span>
          <span
            class="relative before:absolute before:w-1 before:h-1 before:bg-gray-550 before:rounded-full before:top-[7px] before:-left-3"
            >{{ car.km }} km</span
          >
          <span
            class="relative before:absolute before:w-1 before:h-1 before:bg-gray-550 before:rounded-full before:top-[7px] before:-left-3"
            >{{ car.fuelType }}</span
          >
        </p>

        <p class="text-gray-950 pt-2 pb-3">
          {{ car.description }}
        </p>

        <div class="flex justify-between items-center">
          <p class="text-base font-semibold">
            <span>${{ car.price.toLocaleString() }}</span>
          </p>

          <RouterLink
            to="/"
            class="text-green-750 ml-auto text-sm font-semibold"
            >Details ></RouterLink
          >
        </div>
      </template>
    </EcCard>
  </div>
</template>

<script lang="ts" setup>
import EcCard from "./EcCard.vue";
import IconHeart from "./icons/IconHeart.vue";

import { useCarStore } from "../store/useCarStore"

const store = useCarStore()

const getImageUrl = (imgUrl: string) => {
  return new URL(`../assets/${imgUrl}`, import.meta.url).href
}

</script>
