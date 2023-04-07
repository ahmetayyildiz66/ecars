<template>
  <div class="bg-black-50">
    <div class="container h-9 flex items-center text-gray-350 text-[13px]">
      <div class="flex items-center space-x-[6px]">
        <IconWhatsapp />
        <span>+971 55 811 9024</span>
      </div>

      <div class="flex ml-auto space-x-6">
        <div class="hidden md:flex items-center space-x-[6px]">
          <IconLocation />
          <span>Ship to: </span>
          <IconCanada />
          <p class="text-white flex items-center">
            <span>Canada</span>
            <IconArrowDown />
          </p>
        </div>

        <div class="hidden md:flex items-center space-x-[6px]">
          <span>Currency:</span>
          <p class="text-white flex items-center">
            <span>USD</span>
            <IconArrowDown />
          </p>
        </div>

        <div class="flex items-center space-x-[6px]">
          <IconQuestion />
          <span>Help</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// icons
import IconWhatsapp from "../components/icons/IconWhatsapp.vue";
import IconQuestion from "../components/icons/IconQuestion.vue";
import IconLocation from "../components/icons/IconLocation.vue";
import IconCanada from "../components/icons/IconCanada.vue";
import IconArrowDown from "../components/icons/IconArrowDown.vue";
</script>
