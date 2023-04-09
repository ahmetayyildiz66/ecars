<template>
  <div
    class="w-[304px] rounded-lg shadow-md bg-white shadow-gray-300 shrink-0 p-4 space-y-4"
  >
    <div class="flex items-center">
      <img
        :src="getImageUrl()"
        alt="Genesis Car"
        class="h-10 w-10 rounded-full"
      />

      <div class="ml-4">
        <div class="flex items-center">
          <IconStarFill v-for="i in 5" :key="i" />
        </div>
        <h6 class="font-semibold text-sm text-gray-950">Robert Fox</h6>
        <span class="text-xs text-gray-550 block">BMW M850</span>
      </div>
    </div>

    <p>
      “{{ comment }}”
    </p>
  </div>
</template>

<script lang="ts" setup>
import IconStarFill from "./icons/IconStarFill.vue";

const props = defineProps({
  avatarUrl: String,
  comment: String
});

const getImageUrl = () => {
  return new URL(`../assets/${props.avatarUrl}`, import.meta.url).href;
};
</script>
