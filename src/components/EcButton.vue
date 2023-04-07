<template>
  <button class="bg-green-750 text-white py-[8px] px-3 rounded-lg text-sm font-semibold inline-block" :class="[{'w-full py-[14px] text-base': isFullWidth}]">
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