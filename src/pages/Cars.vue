<template>
  <div
    class="container py-8 md:py-10 lg:py-12 mx-auto justify-center lg:px-[104px]"
  >
    <HeadingTertiary text="Find cars to fit your criteria" />

    <EcCarsFiltering />

    <EcPagination class="flex justify-center" />
  </div>
</template>

<script lang="ts" setup>
import HeadingTertiary from "../typography/HeadingTertiary.vue";
import EcCarsFiltering from "../components/EcCarsFiltering.vue";
import EcPagination from "../components/EcPagination.vue";
</script>
