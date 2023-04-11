import { ref } from "vue"

export const isOpen = ref(false)

export const useToggleSidebar = () => {
  isOpen.value  = !isOpen.value
}