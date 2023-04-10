<template>
  <div class="py-6 text-sm space-y-4">
    <EcCard v-for="car in cars" :key="car.id">
      <template #header>
        <img
          :src="getImageUrl(car.imageUrl)"
          alt="Cruiser Toyota"
          class="w-full h-[300px] object-fill md:w-auto md:max-w-[300px] rounded-tr-lg rounded-tl-lg md:h-full md:rounded-tr-none md:rounded-bl-lg"
        />
      </template>

      <template #default>
        <h6 class="text-gray-950 flex space-x-3 text-base justify-between">
          <p>{{ car.model }}</p>
          <button class="block h-4 w-5">
            <IconHeart />
          </button>
        </h6>
        <p class="mt-1 text-sm text-gray-550 space-x-4">
          <span>{{ car.city }}</span>
          <span class="relative before:absolute before:w-1 before:h-1 before:bg-gray-550 before:rounded-full before:top-[7px] before:-left-3">
            {{ car.isNew ? 'NEW' : 'Used' }}
          </span>
          <span
            class="relative before:absolute before:w-1 before:h-1 before:bg-gray-550 before:rounded-full before:top-[7px] before:-left-3"
            >{{ car.km }} km</span
          >
          <span
            class="relative before:absolute before:w-1 before:h-1 before:bg-gray-550 before:rounded-full before:top-[7px] before:-left-3"
            >{{ car.fuelType }}</span
          >
        </p>

        <p class="text-gray-950 pt-2 pb-3">
          {{ car.description }}
        </p>

        <div class="flex justify-between items-center">
          <p class="text-base font-semibold">
            <span>${{ car.price.toLocaleString() }}</span>
          </p>

          <RouterLink
            to="/"
            class="text-green-750 ml-auto text-sm font-semibold"
            >Details ></RouterLink
          >
        </div>
      </template>
    </EcCard>
  </div>
</template>

<script lang="ts" setup>
import EcCard from "./EcCard.vue";
import IconHeart from "./icons/IconHeart.vue";

interface Car {
  id: number,
  make: string,
  model: string,
  km: number,
  fuelType: string,
  city: string,
  isNew: boolean,
  imageUrl: string,
  price: number,
  description: string
}

const getImageUrl = (imgUrl: string) => {
  return new URL(`../assets/${imgUrl}`, import.meta.url).href
}

const cars: Car[] = [
  {
    id: 1,
    make: 'Toyota',
    model: 'Toyota Land Cruiser 300 VXR+ V6 3.3L Diesel Twin Turbo AT',
    km: 0,
    fuelType: 'Gasoline',
    city: 'Milwaukee',
    isNew: true,
    imageUrl: 'cruiser300.png',
    price: 45995,
    description: '2022 Land Cruiser, panoramic roof, black interior, LED headlights and automatic gearbox. A brand new car with GCC specifications.'
  },
  {
    id: 2,
    make: 'Toyota',
    model: 'Toyota Prado MODEL 2021 TXL 2.7L SUV 4WD',
    km: 20000,
    fuelType: 'Gasoline',
    city: 'Chicago',
    isNew: false,
    imageUrl: 'cruiser.png',
    price: 45995,
    description: '2022 Land Cruiser, panoramic roof, black interior, LED headlights and automatic gearbox. A brand new car with GCC specifications.'
  },
  {
    id: 3,
    make: 'Toyota',
    model: 'Toyota FJ Cruiser GXR 4',
    km: 0,
    fuelType: 'Gasoline',
    city: 'Memphis',
    isNew: true,
    imageUrl: 'prado.png',
    price: 45995,
    description: '2022 Land Cruiser, panoramic roof, black interior, LED headlights and automatic gearbox. A brand new car with GCC specifications.'
  },
  {
    id: 4,
    make: 'Toyota',
    model: 'Toyota Corolla AED 1250 PM',
    km: 10500,
    fuelType: 'Gasoline',
    city: 'Chicago',
    isNew: false,
    imageUrl: 'corolla-aed.png',
    price: 45995,
    description: '2022 Land Cruiser, panoramic roof, black interior, LED headlights and automatic gearbox. A brand new car with GCC specifications.'
  },
  {
    id: 5,
    make: 'Toyota',
    model: 'Toyota Highlander TOYOTA HIGHLADER XSE 2022 MODEL FULL OPTION 4x4',
    km: 10500,
    fuelType: 'Gasoline',
    city: 'Memphis',
    isNew: false,
    imageUrl: 'highlander.png',
    price: 45995,
    description: '2022 Land Cruiser, panoramic roof, black interior, LED headlights and automatic gearbox. A brand new car with GCC specifications.'
  },
  {
    id: 6,
    make: 'Toyota',
    model: 'Toyota Hiace',
    km: 10500,
    fuelType: 'Gasoline',
    city: 'Memphis',
    isNew: false,
    imageUrl: 'hiace.png',
    price: 45995,
    description: '2022 Land Cruiser, panoramic roof, black interior, LED headlights and automatic gearbox. A brand new car with GCC specifications.'
  },
  {
    id: 7,
    make: 'Toyota',
    model: 'Toyota Tundra iFORCE 5.7LV8',
    km: 10500,
    fuelType: 'Gasoline',
    city: 'Detroit',
    isNew: false,
    imageUrl: 'tundra.png',
    price: 45995,
    description: '2022 Land Cruiser, panoramic roof, black interior, LED headlights and automatic gearbox. A brand new car with GCC specifications.'
  },
  {
    id: 8,
    make: 'Toyota',
    model: 'Toyota Hilux 2019 TOYOTA HILUX MANUAL 4X4',
    km: 10500,
    fuelType: 'Gasoline',
    city: 'Detroit',
    isNew: false,
    imageUrl: 'hilux.png',
    price: 45995,
    description: '2022 Land Cruiser, panoramic roof, black interior, LED headlights and automatic gearbox. A brand new car with GCC specifications.'
  },
  {
    id: 9,
    make: 'Toyota',
    model: 'Toyota Land Cruiser GXR 2016',
    km: 0,
    fuelType: 'Gasoline',
    city: 'Detroit',
    isNew: true,
    imageUrl: 'land-cruiser.png',
    price: 45995,
    description: '2022 Land Cruiser, panoramic roof, black interior, LED headlights and automatic gearbox. A brand new car with GCC specifications.'
  },
  {
    id: 10,
    make: 'Toyota',
    model: 'Toyota Prado Black Edition 70th Anniversary 10/2021 Diesel 4WD Sunroof 2.8L',
    km: 10500,
    fuelType: 'Gasoline',
    city: 'Oklahoma City',
    isNew: false,
    imageUrl: 'land-cruiser.png',
    price: 45995,
    description: '2022 Land Cruiser, panoramic roof, black interior, LED headlights and automatic gearbox. A brand new car with GCC specifications.'
  },
]
</script>
