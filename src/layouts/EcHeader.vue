<template>
  <header class="container h-[52px] md:h-[60px] flex items-center">
    <div class="flex items-center space-x-4">
      <button class="w-8 h-8 flex items-center justify-center">
        <IconHamburger />
      </button>

      <IconLogo />
    </div>

    <div class="ml-auto flex items-center space-x-4 md:space-x-[22px]">
      <EcIconButton>
        <IconSearch />
      </EcIconButton>

      <EcIconButton class="hidden md:flex">
        <IconHeart />
      </EcIconButton>

      <EcIconButton class="hidden md:flex">
        <IconAccount />
      </EcIconButton>

      <EcButton />
    </div>

  </header>
</template>

<script lang="ts" setup>
// components
import EcButton from "../components/EcButton.vue";
import EcIconButton from "../components/EcIconButton.vue";

// icons
import IconHamburger from "../components/icons/IconHamburger.vue";
import IconLogo from "../components/icons/IconLogo.vue";
import IconSearch from "../components/icons/IconSearch.vue";
import IconAccount from "../components/icons/IconAccount.vue";
import IconHeart from "../components/icons/IconHeart.vue";
</script>
