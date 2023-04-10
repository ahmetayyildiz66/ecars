<template>
  <div class="py-6 text-sm">
    <EcCard>
      <template #header>
        <img
          src="../assets/cruiser.png"
          alt="Cruiser Toyota"
          class="md:max-w-[300px] rounded-tr-lg rounded-tl-lg h-full md:rounded-tr-none md:rounded-bl-lg"
        />
      </template>

      <template #default>
        <h6 class="text-gray-950 flex space-x-3 text-base">
          <p>Toyota Land Cruiser 300 VXR+ V6 3.3L Diesel Twin Turbo AT</p>
          <button class="block h-4 w-5">
            <IconHeart />
          </button>
        </h6>
        <p class="mt-1 text-sm text-gray-550 space-x-4">
          <span>Milwaukee</span>
          <span class="relative before:absolute before:w-1 before:h-1 before:bg-gray-550 before:rounded-full before:top-[7px] before:-left-3">NEW</span>
          <span
            class="relative before:absolute before:w-1 before:h-1 before:bg-gray-550 before:rounded-full before:top-[7px] before:-left-3"
            >0 km</span
          >
          <span
            class="relative before:absolute before:w-1 before:h-1 before:bg-gray-550 before:rounded-full before:top-[7px] before:-left-3"
            >Gasoline</span
          >
        </p>

        <p class="text-gray-950 pt-2 pb-3">
          2022 Land Cruiser, panoramic roof, black interior, LED headlights and
          automatic gearbox. A brand new car with GCC specifications.
        </p>

        <div class="flex justify-between items-center">
          <p class="text-base font-semibold">
            <span>$45,995</span>
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
</script>
