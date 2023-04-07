<template>
  <button class="bg-green-750 text-white py-[6px] px-3 rounded-lg text-sm font-semibold inline-block" :class="[{'w-full': isFullWidth}]">
    Get a quote
  </button>
</template>

<script lang="ts" setup>
interface Props {
  isFullWidth?: boolean
}

withDefaults(defineProps<Props>(), {
  isFullWidth: false
})
</script>