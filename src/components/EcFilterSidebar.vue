<template>
  <aside v-if="isOpen">
    <div class="z-10 fixed inset-0 transition-opacity">
      <div tabindex="-1" class="absolute inset-0 bg-black-50 opacity-60"></div>
    </div>

    <div
      class="z-10 fixed inset-y-0 right-0 w-[335px] bg-white p-4 space-y-6 lg:space-y-4"
      v-on-click-outside="useToggleSidebar"
    >
      <EcDropdown
        :options="dropdownFilters.options"
        :label="dropdownFilters.label"
        :isMain="dropdownFilters.isMain"
        @makeOption="selectedMakeOption"
      />

      <EcDropdown
        v-if="models.length"
        :options="models"
        label="Model"
        @makeOption="selectedMakeOption"
      />
    </div>
  </aside>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { vOnClickOutside } from "@vueuse/components";

import { useCarStore } from "../store/useCarStore";
import { useToggleSidebar, isOpen } from "../composables/useToggleSidebar";
import EcDropdown from "./EcDropdown.vue";
import { dropdownFilters } from "../filters/dropdownFilters";

interface ModelOption {
  id: string;
  text: string;
}

const models = ref<ModelOption[]>([]);

const store = useCarStore();

const selectedMakeOption = (opt: ModelOption) => {
  store.filterCars(opt.id);
  const makeOptions = dropdownFilters.options.find(
    (option) => option.id === opt.id
  );
  if (makeOptions?.models) {
    models.value = makeOptions.models.options;
  }

  store.setFilters(opt.text);
};

watch(isOpen, (val) => {
  if (val) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
});
</script>
