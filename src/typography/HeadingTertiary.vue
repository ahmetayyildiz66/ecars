<template>
  <h3 class="text-gray-950 text-[26px] lg:text-[32px] font-semibold font-inter-tight">{{ text }}</h3>
</template>

<script lang="ts" setup>
defineProps({
  text: String
})
</script>