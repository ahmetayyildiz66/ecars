<template>
  <button
    class="bg-green-750 text-white py-[8px] px-3 md:px-6 md:py-3 rounded-lg text-sm font-semibold inline-block"
    :class="[
      { 'w-full !py-[14px] text-base': isFullWidth },
      { '!py-[14px] px-[29px]': isBig },
    ]"
  >
    Get a quote
  </button>
</template>

<script lang="ts" setup>
interface Props {
  isFullWidth?: boolean;
  isBig?: boolean;
}

withDefaults(defineProps<Props>(), {
  isFullWidth: false,
  isBig: false,
});
</script>
