<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 8.82196L5.28596 4.10791L4.10745 5.28642L8.8215 10.0005L4.10746 14.7145L5.28597 15.893L10 11.179L14.7141 15.893L15.8926 14.7145L11.1785 10.0005L15.8926 5.28642L14.7141 4.10791L10 8.82196Z"
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