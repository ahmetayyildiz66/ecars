<template>
  <section class="py-8 px-4 md:py-10 md:px-8 lg:py-24 lg:px-[316px]  bg-black-50 text-white md:flex md:justify-between md:space-x-8 md:items-center">
    <div class="max-w-[534px]">
      <h4 class="font-semibold text-[19px] mb-4">
        Send an inquiry now and get the best offers suitable for your requirements
      </h4>
      <p class="text-sm">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim velit mollit. Exercitation veniam
        consequat sunt nostrud amet.
      </p>
    </div>

    <EcButton class="sm:mt-6 md:mt-0 ml-auto" :is-full-width="isMobile" />
  </section>
</template>

<script lang="ts" setup>
import EcButton from "./EcButton.vue";

import { useIsMobile } from "../composables/useMediaQuery";

const isMobile = useIsMobile.value === 'mobile'

</script>
