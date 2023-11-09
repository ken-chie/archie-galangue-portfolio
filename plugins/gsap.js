
import { gsap } from "gsap-trial"
import { ScrollTrigger } from "gsap-trial/ScrollTrigger"
import { ScrollSmoother } from "gsap-trial/ScrollSmoother"
import { ScrollToPlugin } from "gsap-trial/ScrollToPlugin"

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin)
  }

  return {
    provide: {
      gsap,
      ScrollTrigger,
      ScrollSmoother,
      ScrollToPlugin
    }
  }
})