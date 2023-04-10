import { defineStore } from "pinia"

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

export const useCarStore = defineStore('cars', {
  state: () => {
    return {
      cars: [
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
      ] as Car[]
    }
  },
  getters: {
    getCars: (state) => state.cars
  }
})