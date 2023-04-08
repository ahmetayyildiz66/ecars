<template>
  <section class="container py-8 md:flex md:items-center text-base md:space-x-4 lg:space-x-[128px]">
    <img src="../assets/whyUsMobile.png" alt="Why us mobile" />

    <div class="md:pl-6 lg:max-w-[392px]">
      <h2 class="text-3xl font-semibold my-6">Why choose us</h2>
      <p class="text-gray-950">
        Quis blandit turpis cursus in hac. In hendrerit gravida rutrum quisque.
        Pellentesque habitant morbi tristique senectus et. Eget gravida cum sociis
        natoque. Pharetra diam sit amet nisl suscipit adipiscing bibendum.
      </p>
      <p class="mt-6 text-gray-950">
        Porttitor massa id neque aliquam. In fermentum posuere urna nec. Rhoncus
        aenean vel elit scelerisque mauris pellentesque. Nullam ac tortor vitae
        purus faucibus ornare suspendisse sed nisi. Consequat id porta nibh
        venenatis cras sed.
      </p>
      <div class="mt-6 flex space-x-4">
        <IconLine class="mt-3" />
      
        <p class="flex flex-col space-y-2">
          <span class="font-semibold text-base">Some headline</span>
          <span class="text-sm text-gray-950">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</span>
        </p>
      </div>
      <div class="mt-6 flex space-x-4">
        <IconLine class="mt-3" />
      
        <p class="flex flex-col space-y-2">
          <span class="font-semibold text-base">Some headline</span>
          <span class="text-sm text-gray-950">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</span>
        </p>
      </div>
      <div class="mt-6 flex space-x-4">
        <IconLine class="mt-3" />
      
        <p class="flex flex-col space-y-2">
          <span class="font-semibold text-base">Some headline</span>
          <span class="text-sm text-gray-950">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import IconLine from './icons/IconLine.vue';
</script>