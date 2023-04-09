<template>
  <article
    class="w-[343px] lg:w-[392px] rounded-lg shadow-md bg-white shadow-gray-300 shrink-0"
  >
    <img
      :src="getImageUrl()"
      alt="Rising fuel"
      class="object-cover rounded-tr-lg rounded-tl-lg w-full"
    />

    <div class="p-4 space-y-3">
      <EcChip :label="label" :is-info="isInfo" />

      <h3 class="text-gray-950 text-base font-semibold">
        {{ title }}
      </h3>

      <p>
        {{ content }}
      </p>
    </div>
  </article>
</template>

<script lang="ts" setup>
import EcChip from "./EcChip.vue";

const getImageUrl = () => {
  return new URL(`../assets/${props.imageUrl}`, import.meta.url).href
}


interface Props {
  isInfo: boolean;
  label: string;
  title: string;
  content: string;
  imageUrl: string
}

const props = defineProps<Props>();
</script>
