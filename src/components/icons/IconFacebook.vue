<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.33333 9H11L11.6667 6.33333H9.33333V5C9.33333 4.31333 9.33333 3.66667 10.6667 3.66667H11.6667V1.42667C11.4493 1.398 10.6287 1.33333 9.762 1.33333C7.952 1.33333 6.66666 2.438 6.66666 4.46667V6.33333H4.66666V9H6.66666V14.6667H9.33333V9Z"
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
