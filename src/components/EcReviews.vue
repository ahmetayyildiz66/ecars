<template>
  <section class="bg-gray-50">
    <EcCarouselSlider>
      <template #header>
        <h4 class="text-3xl font-semibold mb-6">
          Our happy clients say about us
        </h4>
      </template>


      <template #tabletDesktopSlider>
        <EcSlider @prev-slide="prevSlide" @next-slide="nextSlide" />
      </template>

      <template #default>
        <div
          class="flex lg:container space-x-4 overflow-hidden pb-2 mb-5 md:mb-0"
          :class="[{ 'ml-4': index === 0 }]"
        >
          <EcReviewCard
            v-for="(car, i) in reviews"
            :key="car.avatarUrl"
            :avatar-url="car.avatarUrl"
            :comment="car.comment"
            :style="{ transform: `translateX(-${index * 100}%)` }"
            class="transition-all duration-300 ease-in-out"
            :class="[{ 'opacity-25': isBlurry(i) }]"
          />
        </div>
      </template>

      <template #footer>
        <EcSlider @prev-slide="prevSlide" @next-slide="nextSlide" />
      </template>
    </EcCarouselSlider>

  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import EcCarouselSlider from "./EcCarouselSlider.vue";
import EcSlider from "./EcSlider.vue";
import EcReviewCard from "./EcReviewCard.vue";
import { useIsMobile } from "../composables/useMediaQuery";

const isBlurry = (i: number) => {
  if (useIsMobile.value === "mobile") {
    return i !== index.value;
  } else if (useIsMobile.value === "tablet") {
    return i !== index.value && index.value + 1 !== i;
  }
  return (i + 1) % 5 === 0;
};

const reviews = [
{
    avatarUrl: "avatarRobert.png",
    rating: 5,
    name: "Robert Fox",
    carModel: "BMW M850",
    comment: "Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies lacus. Nisi porta lorem mollis aliquam ut porttitor leo. Venenatis cras sed felis eget. Duis ultricies lacus sed turpis tincidunt. Interdum varius sit amet mattis. Libero justo laoreet sit amet cursus sit amet dictum sit. Consequat interdum varius sit amet mattis vulputate enim nulla."
  },
  {
    avatarUrl: "avatarCody.png",
    rating: 5,
    name: "Cody Fisher",
    carModel: "Mercedes-Benz C 63 AMG",
    comment:
      "Id ornare arcu odio ut sem nulla. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Velit dignissim sodales ut eu sem integer vitae justo. A erat nam at lectus urna duis convallis convallis. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Risus ultricies tristique nulla aliquet enim tortor. Consectetur a erat nam at.",
  },
  {
    avatarUrl: "avatarWade.png",
    rating: 5,
    name: "Wade Warren",
    carModel: "Lexus LS 460",
    comment: "Nullam non nisi est sit amet. Arcu vitae elementum curabitur vitae nunc. Ut tellus elementum sagittis vitae et leo duis. Accumsan sit amet nulla facilisi morbi tempus iaculis. Nisl nunc mi ipsum faucibus. Pulvinar neque laoreet suspendisse interdum consectetur. Accumsan lacus vel facilisis volutpat est velit egestas dui id."
  },
  {
    avatarUrl: "avatarKennedy.png",
    rating: 5,
    name: "Robert Dick",
    carModel: "Volskwagen Tiguan",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nesciunt veniam eveniet iste quas porro soluta ab placeat, praesentium sapiente optio quia, natus dolores qui odio rem adipisci aspernatur dicta?"
  },
  {
    avatarUrl: "avatarGrey.png",
    rating: 5,
    name: "Grey Ni Jang",
    carModel: "Volvo XC 90",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor assumenda asperiores in, nesciunt dolores culpa quia iste nostrum, aut soluta deleniti voluptatum! Quasi mollitia magni nihil iste accusantium, unde recusandae."
  },

];

const index = ref(0);

const prevSlide = () => {
  index.value--;
  if (index.value < 0) {
    index.value = reviews.length - 1;
  }
};

const nextSlide = () => {
  index.value++;
  if (index.value >= reviews.length) {
    index.value = 0;
  }
};
</script>
