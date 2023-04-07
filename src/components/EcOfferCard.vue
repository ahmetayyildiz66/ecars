<template>
  <div class="w-[304px] rounded-lg shadow-md bg-white shadow-gray-300 shrink-0">
    <img :src="getImageUrl()" alt="Genesis Car" class="h-[190px] w-full object-fill rounded-lg" />

    <div class="py-4 px-4">
      <h5 class="text-base">2021 Genesis GV80 2.5T</h5>

      <p class="mt-1 text-xs text-gray-550 space-x-4">
        <span>Used</span>
        <span class="relative before:absolute before:w-1 before:h-1 before:bg-gray-550 before:rounded-full before:top-[7px] before:-left-3">27,057 mi</span>
        <span class="relative before:absolute before:w-1 before:h-1 before:bg-gray-550 before:rounded-full before:top-[7px] before:-left-3">Petrol</span>
      </p>

      <div class="flex justify-between items-center mt-[26px]">
        <p class="space-x-[6px]">
          <span>$45,995</span>
          <span class="text-sm text-gray-250 line-through">$51,490</span>
        </p>

        <RouterLink to="/" class="text-green-750 ml-auto text-sm font-semibold" >Details ></RouterLink>
      </div>

    </div>

  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  srcUrl: String
})

const getImageUrl = () => {
  return new URL(`../assets/${props.srcUrl}`, import.meta.url).href
}
</script>