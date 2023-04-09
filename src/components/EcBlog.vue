<template>
  <section class="py-8 w-full space-y-6 lg:container container">
    <h4 class="text-3xl font-semibold mb-6">Read our blog</h4>

    <div class="grid gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
      <EcBlogCard
        v-for="blog in blogs"
        :key="blog.title"
        :is-info="blog.isInfo"
        :title="blog.title"
        :content="blog.content"
        :label="blog.label"
        :image-url="blog.imageUrl"
      />
    </div>

    <p class="text-green-750 font-semibold items-center space-x-1 flex">
        <span>All articles</span>
        <IconExpand />
      </p>
  </section>
</template>

<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import { useIsMobile } from "../composables/useMediaQuery";

import EcBlogCard from "./EcBlogCard.vue";
import IconExpand from "./icons/IconExpand.vue";

interface Blog {
  isInfo: boolean;
  title: string;
  label: string;
  content: string;
  imageUrl: string;
}

const blogArticles: Blog[] = [
  {
    isInfo: true,
    title: "The rising cost of fuel in the UAE and how to avoid it",
    label: "Guides",
    content:
      "Accumsan sit amet nulla facilisi morbi tempus iaculis. Nisl nunc mi ipsum faucibus. Pulvinar neque laoreet suspendisse interdum consectetur.",
    imageUrl: "blogRisingFuel.png",
  },
  {
    isInfo: false,
    title: "These new EV pick up trucks are about to be all the rage",
    label: "News",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "blogEVTrucks.png",
  },
  {
    isInfo: true,
    title: "7 tips when buying a new car in UAE",
    label: "Guides",
    content:
      "Platea dictumst quisque sagittis purus sit amet volutpat consequat. Porta nibh venenatis cras sed felis eget.",
    imageUrl: "blogTips.png",
  },
];

const blogs = computed(() => {
  console.log('useIsMobile: ', useIsMobile.value)
  if (useIsMobile.value === 'tablet') {
    return blogArticles.slice(0, 2)
  }

  return blogArticles
})
</script>
