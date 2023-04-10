import { ref } from "vue";

export const isOpen = ref(false)

export const useToggleMenu = () => {
  console.log('hey use toggle')
  isOpen.value = !isOpen.value
}