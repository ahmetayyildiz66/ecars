<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.362 4.332C14.6667 5.52 14.6667 8 14.6667 8C14.6667 8 14.6667 10.48 14.362 11.668C14.1927 12.3247 13.6973 12.8413 13.07 13.016C11.9307 13.3333 8 13.3333 8 13.3333C8 13.3333 4.07133 13.3333 2.92999 13.016C2.29999 12.8387 1.80533 12.3227 1.63799 11.668C1.33333 10.48 1.33333 8 1.33333 8C1.33333 8 1.33333 5.52 1.63799 4.332C1.80733 3.67533 2.30266 3.15867 2.92999 2.984C4.07133 2.66667 8 2.66667 8 2.66667C8 2.66667 11.9307 2.66667 13.07 2.984C13.7 3.16133 14.1947 3.67733 14.362 4.332ZM6.66666 10.3333L10.6667 8L6.66666 5.66667V10.3333Z"
      :fill="fill"
      :fill-opacity="opacity"
    />
  </svg>
</template>

<script lang="ts" setup>
export interface IconProps {
  width: number,
  height: number,
  fill: string,
  opacity?: number
}
defineProps<IconProps>()
</script>