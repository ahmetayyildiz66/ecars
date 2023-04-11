<template>
  <aside>
    <div class="z-10 fixed inset-0 transition-opacity">
      <div tabindex="-1" class="absolute inset-0 bg-black-50 opacity-60"></div>
    </div>

    <div
      class="z-10 fixed inset-y-0 right-0 h-full w-[335px] bg-white p-4"
      v-on-click-outside="toggleSidebar"
    >
      <p class="text-red-600">test</p>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>