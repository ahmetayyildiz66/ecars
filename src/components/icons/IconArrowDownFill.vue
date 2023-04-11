<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 13.333L5 8.33301H15L10 13.333Z" :fill="fill" />
  </svg>
</template>

<script lang="ts" setup>
defineProps({
  width: Number,
  height: Number,
  fill: String
})
</script>
