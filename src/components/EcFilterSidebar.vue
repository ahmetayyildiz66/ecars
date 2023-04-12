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
        @makeOption="selectedMakeOption($event, 'make')"
      />

      <EcDropdown
        v-if="models.length"
        :options="models"
        label="Model"
        @makeOption="selectedMakeOption($event, 'model')"
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

const selectedMakeOption = (opt: ModelOption, type: string) => {
  store.filterCars(opt.id);
  const selectedOptions = dropdownFilters.options.find(
    (option) => option.id === opt.id
  );

  if (selectedOptions?.models) {
    models.value = selectedOptions.models.options;
  }

  const filterSet: { type: string; opt: ModelOption } = { type, opt };

  store.setFilters(filterSet);
};

watch(isOpen, (val) => {
  if (val) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
});
</script>
