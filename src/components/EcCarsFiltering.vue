<template>
  <div class="flex justify-between">
    <div class="w-[288px] hidden lg:flex mt-6 p-4 border rounded-lg">
      <EcDropdown :options="makeOptions" label="Make" />
    </div>

    <div>
      <div class="py-6 flex items-center justify-between text-sm text-gray-750">
        <p class="text-sm">
          <span class="text-gray-750 font-semibold">2743</span>
          found
        </p>
        <p class="flex items-center space-x-2">
          <span>Sort by:</span>
          <button class="flex items-center">
            Newly added
            <IconArrowDownFill :width="20" :height="20" fill="#1A1A1A" />
          </button>
        </p>
      </div>


      <EcFilterButton :is-big="true" class="mb-4 lg:hidden" @click="useToggleSidebar">
        <IconFilter />
        <span>Filters</span>
      </EcFilterButton>


      <div class="flex space-x-1 space-y-1">
        <EcFilterButton v-for="filter in store.getFilters" :key="filter.opt.id">
          <span>{{ filter.opt.text }}</span>
          <IconCross :width="16" :height="16" fill="#A3A3A3" />
        </EcFilterButton>
      </div>

      <div class="flex py-6 mx-auto">
        <EcCars />
      </div>
      <EcFilterSidebar class="lg:hidden" />
    </div>

  </div>
</template>

<script lang="ts" setup>
import { useToggleSidebar } from "../composables/useToggleSidebar";

import { useCarStore } from "../store/useCarStore";

import EcFilterButton from "./EcFilterButton.vue";
import EcFilterSidebar from "./EcFilterSidebar.vue";
import EcCars from "./EcCars.vue";

import IconArrowDownFill from "../components/icons/IconArrowDownFill.vue";
import IconCross from "./icons/IconCross.vue";
import IconFilter from "./icons/IconFilter.vue";
import EcDropdown from "./EcDropdown.vue";

const store = useCarStore()

const makeOptions = [
  {
    id: "all",
    text: "All",
  },
  {
    id: "toyota",
    text: "Toyota",
  },
  {
    id: "bmw",
    text: "BMW",
  },
  {
    id: "mercedes",
    text: "Mercedes-Benz",
  },
]
</script>
