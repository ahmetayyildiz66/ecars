import { useMediaQuery } from "@vueuse/core"
import { computed } from "vue"

export const useIsMobile = computed(() => {
  if (useMediaQuery('(min-width: 1440px)').value) {
    return 'desktop'
  } else if (useMediaQuery('(min-width: 768px)').value) {
    return 'tablet'
  }
  return 'mobile'
})

