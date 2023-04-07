<template>
  <header class="container h-[52px] flex items-center">
    <div class="flex items-center space-x-4">
      <button class="w-8 h-8 flex items-center justify-center">
        <IconHamburger />
      </button>

      <IconLogo />
    </div>

    <div class="ml-auto flex items-center space-x-4">
      <button class="w-8 h-8 flex items-center justify-center">
        <IconSearch />
      </button>

      <EcButton :is-full-width="true" />
    </div>

  </header>
</template>

<script lang="ts" setup>
// components
import EcButton from "../components/EcButton.vue";

// icons
import IconHamburger from "../components/icons/IconHamburger.vue";
import IconLogo from "../components/icons/IconLogo.vue";
import IconSearch from "../components/icons/IconSearch.vue";
</script>
