<template>
  <button
    class="bg-gray-25 rounded-lg py-1 px-2 text-center text-[13px] text-gray-950 flex items-center"
    :class="{ '!px-3 py-[6px] text-sm font-semibold space-x-2': isBig }"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
interface FilterProps {
  isBig?: boolean;
}

defineProps<FilterProps>();
</script>
