<template>
  <div class="container flex flex-col space-y-8 mt-8">
    <div class="flex items-center justify-between text-sm space-x-4">
      <EcFeatureButton>
        <IconBriefcase />
      </EcFeatureButton>

      <div class="flex flex-col max-w-[279px] space-y-2">
        <h3 class="text-gray-950 text-base font-semibold">Professional approach to clients</h3>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
      </div>
    </div>

    <div class="flex items-center justify-between text-sm space-x-4">
      <EcFeatureButton>
        <IconBriefcase />
      </EcFeatureButton>

      <div class="flex flex-col max-w-[279px] space-y-2">
        <h3 class="text-gray-950 text-base font-semibold">Professional approach to clients</h3>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
      </div>
    </div>

    <div class="flex items-center justify-between text-sm space-x-4">
      <EcFeatureButton>
        <IconBriefcase />
      </EcFeatureButton>

      <div class="flex flex-col max-w-[279px] space-y-2">
        <h3 class="text-gray-950 text-base font-semibold">Professional approach to clients</h3>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// components
import EcFeatureButton from "./EcFeatureButton.vue";

// icons
import IconBriefcase from "./icons/IconBriefcase.vue";
</script>
