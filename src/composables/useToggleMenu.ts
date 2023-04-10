import { ref } from "vue";

export const isOpen = ref(false)

export const useToggleMenu = () => {
  isOpen.value = !isOpen.value
}