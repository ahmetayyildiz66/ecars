<template>
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
          <IconArrowDownFill />
        </button>
      </p>
    </div>

    <EcFilterButton :is-big="true" class="mb-4">
      <IconFilter />
      <span>Filters</span>
    </EcFilterButton>

    <div class="flex space-x-1 space-y-1">
      <EcFilterButton>
        <span>Toyota</span>
        <IconCross :width="16" :height="16" fill="#A3A3A3" />
      </EcFilterButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconArrowDownFill from "../components/icons/IconArrowDownFill.vue"
import EcFilterButton from "./EcFilterButton.vue";
import IconCross from "./icons/IconCross.vue";
import IconFilter from "./icons/IconFilter.vue";
</script>
