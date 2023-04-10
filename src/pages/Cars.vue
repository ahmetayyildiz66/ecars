<template>
  <div class="container py-8 md:py-10 lg:py-12">
    <HeadingTertiary text="Find cars to fit your criteria" />

    <EcCarsFiltering />
  </div>
</template>

<script lang="ts" setup>
import HeadingTertiary from "../typography/HeadingTertiary.vue";
import EcCarsFiltering from "../components/EcCarsFiltering.vue";
</script>
