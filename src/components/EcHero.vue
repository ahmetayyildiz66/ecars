<template>
  <div class="relative flex justify-center">
    <img src="../assets/heroMobile.png" alt="Hero Mobile" class="md:hidden w-full h-auto object-cover">
    <img src="../assets/heroTablet.png" alt="Hero Mobile" class="hidden md:flex w-full h-auto object-cover">
    
    <div class="md:hidden lg:flex lg:flex-col container absolute bottom-8 lg:top-[120px]">
      <h1 class="font-semibold text-[42px] leading-[48px] lg:max-w-[600px] lg:text-[60px] lg:leading-[69px]">Car import services with delivery to your doorstep.</h1>
      <div class="lg:flex lg:space-x-8 lg:mt-8">
        <EcButton class="mt-6 lg:mt-0" :is-full-width="isMobile" :is-big="true" title="Get a quote" />
        
        <div class="mt-6 md:mt-0 font-semibold flex lg:space-x-8 items-center justify-between text-sm">
          <div class="flex items-center space-x-1 lg:space-x-[6px]">
            <IconWhatsapp :width="20" :height="20" :fill="'#1A1A1A'"/>
            <span>+971 55 811 9024</span>
          </div>

          <div class="flex items-center space-x-1 lg:space-x-[6px]">
            <IconMail :width="20" :height="20" :fill="'#1A1A1A'"/>
            <span>request@example.com</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
// composables
import { useMediaQuery } from "@vueuse/core"

// components
import EcButton from './EcButton.vue';

// icons
import IconWhatsapp from './icons/IconWhatsapp.vue';
import IconMail from './icons/IconMail.vue';

const isMobile = useMediaQuery('(max-width: 767px)')
</script>