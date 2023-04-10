<template>
  <div v-if="isOpen">
      <div class="z-10 fixed inset-0 transition-opacity lg:hidden">
        <div
          tabindex="-1"
          class="absolute inset-0 bg-black-50 opacity-50"
        ></div>
      </div>

      <div class="text-gray-950 lg:hidden">
        <div
          class="z-10 fixed inset-y-0 left-0 w-[335px] md:w-[360px] transform transition-transform duration-300 ease-in bg-white overflow-y-auto pt-11 md:pt-[50px] px-4 pb-4 md:pb-8 md:px-8 flex flex-col"
          v-on-click-outside="useToggleMenu"
        >
          <div>
            <div class="flex items-center space-x-4 mb-4">
              <button class="p-[6px]" @click="useToggleMenu">
                <IconCross :width="20" :height="20" fill="#1A1A1A"/>
              </button>
              <router-link to="/">
                <IconLogo />
              </router-link>
            </div>
            <div class="pt-4 md:pt-8">
              <ul>
                <router-link class="py-3" to="/cars">All Cars</router-link>
                <li class="py-3">About Us</li>
                <li class="py-3">Blog</li>
                <li class="py-3">FAQ</li>
              </ul>
            </div>
          </div>
          <div class="mt-auto">
            <ul class="space-y-6">
              <li class="flex items-center space-x-[6px]">
                <IconAccount />
                <span>Sign In</span>
              </li>

              <li class="flex items-center space-x-[6px]">
                <span>Ship to:</span>
                <IconCanada />

                <p class="flex items-center">
                  <span>Canada</span>
                  <IconArrowDown :width="12" :height="12" fill="#1A1A1A" />
                </p>
              </li>

              <li class="flex items-center space-x-[6px]">
                <span>Currency:</span>

                <p class="flex items-center">
                  <span>USD</span>
                  <IconArrowDown :width="12" :height="12" fill="#1A1A1A" />
                </p>
              </li>
            </ul>

            <div class="border-b pt-6"></div>

            <div class="flex items-center space-x-2 pt-6">
              <IconWhatsapp :width="20" :height="20" :fill="'#767676'" />
              <span>+971 55 811 9024</span>
            </div>

            <div class="flex items-center space-x-2 pt-6">
              <IconMail :width="20" :height="20" :fill="'#767676'" />
              <span>request@example.com</span>
            </div>

            <div class="flex space-x-5 mt-6">
              <IconFacebook :width="20" :height="20" fill="#767676" />

              <IconTwitter :width="20" :height="20" fill="#767676" />

              <IconYoutube :width="20" fill="#767676" :height="20" />

              <IconInstagram :width="20" fill="#767676" :height="20" />
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts" setup>
import { watch } from "vue";
import { vOnClickOutside } from "@vueuse/components";

import { isOpen, useToggleMenu } from "../composables/useToggleMenu";

import IconCross from "../components/icons/IconCross.vue";
import IconLogo from "../components/icons/IconLogo.vue";
import IconAccount from "../components/icons/IconAccount.vue";
import IconCanada from "../components/icons/IconCanada.vue";
import IconArrowDown from "../components/icons/IconArrowDown.vue";
import IconWhatsapp from "../components/icons/IconWhatsapp.vue";
import IconMail from "../components/icons/IconMail.vue";
import IconFacebook from "../components/icons/IconFacebook.vue";
import IconInstagram from "../components/icons/IconInstagram.vue";
import IconYoutube from "../components/icons/IconYoutube.vue";
import IconTwitter from "../components/icons/IconTwitter.vue";

watch(isOpen, (val) => {
  if (val) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
});
</script>