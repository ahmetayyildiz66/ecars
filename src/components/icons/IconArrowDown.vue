<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.00036 6.58584L8.47536 4.11084L9.18236 4.81784L6.00036 7.99984L2.81836 4.81784L3.52536 4.11084L6.00036 6.58584Z"
      :fill="fill"
    />
  </svg>
</template>

<script lang="ts" setup>
defineProps({
  width: Number,
  height: Number,
  fill: String
})
</script>