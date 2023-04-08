<template>
  <section
    class="py-8 px-4 md:py-10 md:px-8 text-gray-950 text-center lg:container lg:py-24"
  >
    <h2 class="text-3xl font-semibold">How it works</h2>
    <p class="text-base mt-6 lg:max-w-[600px] mx-auto">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit.
    </p>

    <ul
      class="mt-6 grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4 lg:mt-12"
    >
      <li class="flex items-center flex-col">
        <EcFeatureButton>
          <span class="text-lg font-semibold">1</span>
        </EcFeatureButton>
        <h5 class="text-[17px] font-semibold mt-4 mb-2">Find a car</h5>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
      </li>

      <li class="flex items-center flex-col relative">
        <EcFeatureButton
          class="lg:before:absolute lg:before:w-[184px] lg:before:border-t lg:before:border-dashed lg:before:border-gray-450 lg:before:-left-[105px]"
        >
          <span class="text-lg font-semibold">2</span>
        </EcFeatureButton>
        <h5 class="text-[17px] font-semibold mt-4 mb-2">
          Extensive inspection
        </h5>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
      </li>

      <li class="flex items-center flex-col relative">
        <EcFeatureButton
          class="lg:before:absolute lg:before:w-[184px] lg:before:border-t lg:before:border-dashed lg:before:border-gray-450 lg:before:-left-[105px]"
        >
          <span class="text-lg font-semibold">3</span>
        </EcFeatureButton>
        <h5 class="text-[17px] font-semibold mt-4 mb-2">Safe Buying</h5>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
      </li>

      <li class="flex items-center flex-col relative">
        <EcFeatureButton
          class="lg:before:absolute lg:before:w-[184px] lg:before:border-t lg:before:border-dashed lg:before:border-gray-450 lg:before:-left-[105px]"
        >
          <span class="text-lg font-semibold">4</span>
        </EcFeatureButton>
        <h5 class="text-[17px] font-semibold mt-4 mb-2">
          Delivery and support
        </h5>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
import EcFeatureButton from "./EcFeatureButton.vue";
</script>
