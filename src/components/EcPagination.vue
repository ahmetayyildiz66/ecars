<template>
  <div class="space-x-1" v-if="store.getCarsLength > 10">
    <EcPaginationButton
      :class="{
        'opacity-40 cursor-default pointer-events-none': store.getPage === 1,
      }"
    >
      <IconArrowLeft />
    </EcPaginationButton>

    <EcPaginationButton
      v-for="page in totalPage"
      :key="page"
      :class="{ 'bg-green-750 text-white': page === store.getPage }"
      @click="paginate(page)"
      >{{ page }}</EcPaginationButton
    >

    <EcPaginationButton :class="{
        'opacity-40 cursor-default pointer-events-none': totalPage === store.getPage,
      }">
      <IconArrowRight />
    </EcPaginationButton>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import { useCarStore } from "../store/useCarStore";

import EcPaginationButton from "./EcPaginationButton.vue";
import IconArrowLeft from "./icons/IconArrowLeft.vue";
import IconArrowRight from "./icons/IconArrowRight.vue";

const store = useCarStore();

const paginate = (page: number) => {
  store.setPage(page);
};

const totalPage = computed(() => {
  return Math.ceil(store.getCarsLength / 10);
});
</script>
