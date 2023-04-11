<template>
  <header class="container h-[52px] md:h-[60px] flex items-center relative">
    <div class="flex items-center space-x-4 lg:space-x-0">
      <button
        class="w-8 h-8 flex items-center justify-center lg:hidden"
        @click="useToggleMenu"
      >
        <IconHamburger />
      </button>

      <router-link to="/">
        <IconLogo />
      </router-link>

      <div class="hidden lg:flex space-x-8 !ml-5 items-center">
        <router-link
          class="text-gray-900 font-semibold text-sm leading-6"
          to="/cars"
          >All Cars</router-link
        >
        <router-link
          class="text-gray-900 font-semibold text-sm leading-6"
          to="/"
          >About Us</router-link
        >
        <router-link
          class="text-gray-900 font-semibold text-sm leading-6"
          to="/"
          >Blog</router-link
        >
        <router-link
          class="text-gray-900 font-semibold text-sm leading-6"
          to="/"
          >Contact</router-link
        >
      </div>
    </div>

    <div class="ml-auto flex items-center space-x-4 md:space-x-[22px]">
      <EcIconButton class="flex" @click="toggleSearchModal">
        <IconSearch />
      </EcIconButton>

      <EcIconButton class="hidden md:flex">
        <IconHeart />
      </EcIconButton>

      <EcIconButton class="hidden md:flex">
        <IconAccount />
      </EcIconButton>

      <EcButton title="Get a quote" />
    </div>

    <EcSidebar />

    <div v-if="isSearchOpen">
      <div class="z-10 fixed inset-0 transition-opacity">
        <div
          tabindex="-1"
          class="absolute inset-0 bg-black-50 opacity-60"
        ></div>
      </div>

      <div>
        <div class="z-10 fixed inset-0 h-[84px] bg-white p-4 flex items-center" v-on-click-outside="toggleSearchModal">
          <div class="px-3 py-4 border w-full rounded-lg relative">
            <input
              type="text"
              placeholder="Search"
              class="w-[90%] h-full inline-block focus:outline-none text-sm"
            />
            <IconSearch class="absolute top-[18px] right-3" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
// ref
import { ref, watch } from "vue";
import { vOnClickOutside } from "@vueuse/components";

import { useToggleMenu, isOpen } from "../composables/useToggleMenu";


// components
import EcButton from "../components/EcButton.vue";
import EcIconButton from "../components/EcIconButton.vue";

// icons
import IconHamburger from "../components/icons/IconHamburger.vue";
import IconLogo from "../components/icons/IconLogo.vue";
import IconSearch from "../components/icons/IconSearch.vue";
import IconAccount from "../components/icons/IconAccount.vue";
import IconHeart from "../components/icons/IconHeart.vue";
import EcSidebar from "./EcSidebar.vue";
import { useRoute } from "vue-router";

const isSearchOpen = ref(false);

const toggleSearchModal = () => {
  isSearchOpen.value = !isSearchOpen.value;
};

const route = useRoute()

watch(route, () => {
  isOpen.value = false
})
</script>
