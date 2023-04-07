<template>
  <div class="relative flex justify-center">
    <img src="../assets/heroMobile.png" alt="Hero Mobile" class="w-full h-auto object-cover">
    
    <div class="container absolute bottom-8">
      <h1 class="font-semibold text-[42px] leading-[48px]">Car import services with delivery to your doorstep.</h1>
      <EcButton class="mt-6" :is-full-width="true" />
      
      <div class="mt-6 font-semibold flex items-center justify-between text-sm">
        <div class="flex items-center space-x-1">
          <IconWhatsapp :width="20" :height="20" :fill="'#1A1A1A'"/>
          <span>+971 55 811 9024</span>
        </div>

        <div class="flex items-center space-x-1">
          <IconMail :width="20" :height="20" :fill="'#1A1A1A'"/>
          <span>request@example.com</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
// components
import EcButton from './EcButton.vue';

// icons
import IconWhatsapp from './icons/IconWhatsapp.vue';
import IconMail from './icons/IconMail.vue';
</script>