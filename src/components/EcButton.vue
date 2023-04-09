<template>
  <button
    class="py-[8px] px-3 md:px-6 md:py-3 rounded-lg text-sm font-semibold inline-block"
    :class="[
      { 'w-full !py-[14px] text-base': isFullWidth },
      { '!py-[14px] px-[29px]': isBig },
      btnColor
    ]"
  >
    {{ title }}
  </button>
</template>

<script lang="ts" setup>
import { computed } from '@vue/reactivity';

interface Props {
  isFullWidth?: boolean;
  isBig?: boolean;
  title: string
  isPrimary?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isFullWidth: false,
  isBig: false,
  isPrimary: true
});

const btnColor = computed(() => {
  if (!props.isPrimary) {
    return 'text-green-750 bg-white'
  }
  return 'bg-green-750 text-white'
})
</script>
