<template>
  <span class="py-[2px] px-[6px] rounded-[4px] text-sm font-semibold" :class="color">{{ label }}</span>
</template>

<script lang="ts" setup>
import { computed } from '@vue/reactivity';

const props =defineProps({
  label: String,
  isInfo: Boolean
})

const color = computed(() => {
  if (props.isInfo) {
    return 'bg-blue-100 text-blue-450'
  } else {
    return 'bg-orange-100 text-orange-450'
  }
})
</script>