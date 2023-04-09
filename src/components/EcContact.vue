<template>
  <section class="py-8 px-4 md:py-10 md:px-8 lg:py-24 lg:px-[104]  bg-black-50 text-white md:flex md:justify-between md:space-x-8 md:items-center lg:justify-center">
    
    <div class="sm:space-y-8 md:space-y-0 md:space-x-16 md:flex">

      <div class="relative md:after:absolute lg:after:border-none after:border-r after:border-r-gray-600 after:h-full after:top-0 after:-right-8">
        <div class="max-w-[534px]">
          <h4 class="font-semibold text-[19px] mb-4 flex space-x-3 font-inter-tight">
            <IconMailLight class="shrink-0" />
            <p>Send an inquiry and our managers will offer you the best deals.</p>
          </h4>
          <p class="text-sm">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <EcButton class="mt-6 ml-auto" :is-full-width="isFullWidth" title="Get a quote" />
      </div>

      <div>
        <div class="max-w-[534px] md:h-[163px] lg:h-[105px]">
        <h4 class="font-semibold text-[19px] mb-4 flex space-x-3 font-inter-tight">
          <IconQuestionLight class="shrink-0" />
          <p>Do you still have questions? Contact us for answers.</p>
        </h4>
        <p class="text-sm">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <EcButton class="mt-6 ml-auto" :is-full-width="isFullWidth" :is-primary="false" title="Contact us" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import EcButton from "./EcButton.vue";
import IconMailLight from "./icons/IconMailLight.vue";
import IconQuestionLight from "./icons/IconQuestionLight.vue";

import { useIsMobile } from "../composables/useMediaQuery";

const isFullWidth = useIsMobile.value === 'mobile' || useIsMobile.value === 'tablet'

</script>
