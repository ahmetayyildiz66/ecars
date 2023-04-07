<template>
  <div
    class="container flex flex-col space-y-8 lg:space-y-0 mt-8 lg:flex-row lg:space-x-10 lg:mt-0 lg:-translate-y-[84px] lg:rounded-2xl lg:bg-white lg:shadow-2xl lg:px-10 lg:py-10 lg:shadow-gray-350"
  >
    <div
      class="flex items-center justify-between md:justify-normal text-sm space-x-4"
    >
      <EcFeatureButton>
        <IconBriefcase />
      </EcFeatureButton>

      <div class="flex flex-col max-w-[279px] md:max-w-none space-y-2 lg:max-w-[285px]">
        <h3 class="text-gray-950 text-base font-semibold">
          Professional approach to clients
        </h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
      </div>
    </div>

    <div
      class="flex items-center justify-between md:justify-normal text-sm space-x-4"
    >
      <EcFeatureButton>
        <IconPayment />
      </EcFeatureButton>

      <div class="flex flex-col max-w-[279px] md:max-w-none space-y-2 lg:max-w-[285px]">
        <h3 class="text-gray-950 text-base font-semibold">
          Professional approach to clients
        </h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
      </div>
    </div>

    <div
      class="flex items-center justify-between md:justify-normal text-sm space-x-4"
    >
      <EcFeatureButton>
        <IconReview />
      </EcFeatureButton>

      <div class="flex flex-col max-w-[279px] md:max-w-none space-y-2 lg:max-w-[285px]">
        <h3 class="text-gray-950 text-base font-semibold">
          Professional approach to clients
        </h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// components
import EcFeatureButton from "./EcFeatureButton.vue";

// icons
import IconBriefcase from "./icons/IconBriefcase.vue";
import IconPayment from "./icons/IconPayment.vue";
import IconReview from "./icons/IconReview.vue";
</script>
