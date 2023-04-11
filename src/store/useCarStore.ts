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
        {
          id: 11,
          make: 'BMW',
          model: 'BMW 1 Series 120d M Sport',
          km: 15328,
          fuelType: 'Diesel',
          city: 'Gulldford',
          isNew: false,
          imageUrl: 'bmw-1-118d.jpeg',
          price: 29480,
          description: 'BMW 1 Series 120d M Sport, panoramic roof, black interior, LED headlights and automatic gearbox. A brand new car with GCC specifications.'
        },
        {
          id: 12,
          make: 'BMW',
          model: 'BMW 1 Series 120d XDrive M Sport',
          km: 32034,
          fuelType: 'Diesel',
          city: 'Manchester',
          isNew: false,
          imageUrl: 'bmw-1-120d-xdrive.jpeg',
          price: 26000,
          description: 'BMW 1 Series 120d XDrive M Sport panoramic roof, black interior, LED headlights and automatic gearbox. A brand new car with GCC specifications.'
        },
        {
          id: 13,
          make: 'BMW',
          model: 'BMW 1 Series 120d M Sport',
          km: 13254,
          fuelType: 'Diesel',
          city: 'Chelsea',
          isNew: false,
          imageUrl: 'bmw-1-120d.jpeg',
          price: 25850,
          description: 'BMW 1 Series 120d M Sport, panoramic roof, black interior, LED headlights and automatic gearbox. A brand new car with GCC specifications.'
        },
        {
          id: 14,
          make: 'BMW',
          model: 'BMW 1 Series M13i xDrive',
          km: 12357,
          fuelType: 'Gasoline',
          city: 'Sheffield',
          isNew: false,
          imageUrl: 'bmw-m13i.jpeg',
          price: 36500,
          description: 'BMW 1 Series M13i xDrive, panoramic roof, black interior, LED headlights and automatic gearbox. A brand new car with GCC specifications.'
        },
        {
          id: 15,
          make: 'BMW',
          model: 'BMW 4 Series 420d xDrive M Sport Coupe',
          km: 24001,
          fuelType: 'Diesel',
          city: 'Sheffield',
          isNew: false,
          imageUrl: 'bmw-4-420.jpeg',
          price: 33000,
          description: 'BMW 4 Series 420d xDrive M Sport Coupe, panoramic roof, black interior, LED headlights and automatic gearbox. A brand new car with GCC specifications.'
        },
        {
          id: 16,
          make: 'BMW',
          model: 'BMW 4 Series 420d M Sport Convertible',
          km: 14261,
          fuelType: 'Diesel',
          city: 'Arsenal',
          isNew: false,
          imageUrl: 'bmw-4-convertible.jpeg',
          price: 35500,
          description: 'BMW 4 Series 420d M Sport Convertible, panoramic roof, black interior, LED headlights and automatic gearbox. A brand new car with GCC specifications.'
        },
        {
          id: 17,
          make: 'BMW',
          model: 'BMW i4 eDrive40 M Sport',
          km: 13984,
          fuelType: 'Electric',
          city: 'Norwich',
          isNew: false,
          imageUrl: 'bmw-ei4.jpeg',
          price: 52561,
          description: 'BMW 4 Series 420d M Sport Convertible, panoramic roof, black interior, LED headlights and automatic gearbox. A brand new car with GCC specifications.'
        },
        {
          id: 18,
          make: 'BMW',
          model: 'BMW X3 Series M40i',
          km: 21110,
          fuelType: 'Gasoline',
          city: 'Norwich',
          isNew: false,
          imageUrl: 'x3-m40i.jpeg',
          price: 46000,
          description: 'BMW X3 Series M40i, panoramic roof, black interior, LED headlights and automatic gearbox. A brand new car with GCC specifications.'
        },
        {
          id: 19,
          make: 'BMW',
          model: 'BMW X4 xDrive 40i xLine',
          km: 13630,
          fuelType: 'Gasoline',
          city: 'Arsenal',
          isNew: false,
          imageUrl: 'x4-xdrive40i.jpeg',
          price: 34156,
          description: 'BMW X4 xDrive 40i xLine, panoramic roof, black interior, LED headlights and automatic gearbox. A brand new car with GCC specifications.'
        },
        {
          id: 20,
          make: 'BMW',
          model: 'BMW X5 xDrive45e M Sport',
          km: 17852,
          fuelType: 'Hybrid',
          city: 'Stockholm',
          isNew: false,
          imageUrl: 'x5-xdrive45e.jpeg',
          price: 64995,
          description: 'BMW X5 xDrive45e M Sport, panoramic roof, black interior, LED headlights and automatic gearbox. A brand new car with GCC specifications.'
        },
        {
          id: 20,
          make: 'BMW',
          model: 'BMW X5 xDrive45e M Sport',
          km: 17852,
          fuelType: 'Hybrid',
          city: 'Stockholm',
          isNew: false,
          imageUrl: 'x5-xdrive45e.jpeg',
          price: 64995,
          description: 'BMW X5 xDrive45e M Sport, panoramic roof, black interior, LED headlights and automatic gearbox. A brand new car with GCC specifications.'
        },
        {
          id: 21,
          make: 'Mercedes-Benz',
          model: 'Mercedes-Benz A 200 CDI',
          km: 0,
          fuelType: 'Diesel',
          city: 'Malmo',
          isNew: true,
          imageUrl: 'merco-a200.jpeg',
          price: 14999,
          description: 'BMW X5 xDrive45e M Sport, panoramic roof, black interior, LED headlights and automatic gearbox. A brand new car with GCC specifications.'
        },
        {
          id: 22,
          make: 'Mercedes-Benz',
          model: 'Mercedes-Benz AMG G 63',
          km: 30000,
          fuelType: 'Gasoline',
          city: 'Lund',
          isNew: false,
          imageUrl: 'merco-g63-30thsnd.jpeg',
          price: 240000,
          description: 'BMW X5 xDrive45e M Sport, panoramic roof, black interior, LED headlights and automatic gearbox. A brand new car with GCC specifications.'
        },
        {
          id: 23,
          make: 'Mercedes-Benz',
          model: 'Mercedes-Benz AMG G 350',
          km: 55000,
          fuelType: 'Diesel',
          city: 'Malmo',
          isNew: false,
          imageUrl: 'merco-g350-black.jpeg',
          price: 150000,
          description: 'BMW X5 xDrive45e M Sport, panoramic roof, black interior, LED headlights and automatic gearbox. A brand new car with GCC specifications.'
        },
      ] as Car[]
    }
  },
  getters: {
    getCars: (state) => state.cars,
  }
})