<template>
  <div class="bg-white rounded-lg flex flex-col p-4 items-center justify-center shadow-sm shadow-gray-300">
    <img :src="getImageUrl()" :alt="props.brandName" class="mb-3" />
    <span class="text-sm font-semibold text-gray-950">{{ props.brandName }}</span>
  </div>
</template>

<script lang="ts" setup>
const getImageUrl = () => {
  return new URL(`../assets/${props.imageUrl}`, import.meta.url).href
}

const props = defineProps({
  imageUrl: String,
  brandName: String
})
</script>