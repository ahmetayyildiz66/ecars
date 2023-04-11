<template>
  <div class="space-y-2 w-full relative text-sm">
    <label tabindex="0" class="text-sm text-gray-950 font-semibold">{{ label }}</label>
    <div v-on-click-outside="toggleDropdown">
      <div
        class="border rounded-lg flex items-center px-3 py-[10px] hover:cursor-pointer"
        @click="toggleDropdown"
      >
        <span>{{ activeOption }}</span>
        <IconArrowDownFill
          class="ml-auto"
          :width="20"
          :height="20"
          fill="#767676"
        />
      </div>
      <ul
        v-if="isOpen"
        class="absolute top-[63px] inset-x-0 w-full shadow-lg z-10 rounded-lg py-2"
      >
        <li
          v-for="option in options"
          :key="option.id"
          class="py-2 px-4 hover:bg-gray-50 hover:cursor-pointer"
          @click="selectOption(option.text)"
        >
          {{ option.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, PropType } from "vue";
import { vOnClickOutside } from "@vueuse/components";

import IconArrowDownFill from "./icons/IconArrowDownFill.vue";

interface OptionInterface {
  id: string;
  text: string;
}

const props = defineProps({
  options: {
    type: Array as PropType<OptionInterface[]>,
    required: true,
  },
  label: String
});

// dropdown toggle
const isOpen = ref(false);
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const options = computed(() => {
  return props.options.filter((option) => option.id !== "all");
});

const activeOption = ref(props.options[0].text);

const selectOption = (text: string) => {
  activeOption.value = text;
  toggleDropdown();
};
</script>
