<template>
  <div class="px-6 md:px-7 lg:px-6 w-full pt-8 lg:pt-24">
    <div class="mx-auto max-w-screen-lg">
      <p class="text-2xl md:text-5xl text-white font-semibold my-6 md:my-12">Additional technologies and skills</p>
      <div class="block">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 scroll-trigger-add-tech">
          <div class="text-lg md:text-xl text-white inline-flex gap-2 items-baseline font-semibold gsap-add-tech-1">
            <span class="w-3 h-3 bg-gradient-to-r from-teal-400 to-yellow-200 rounded-full"></span>
            Git
          </div>
          <div class="text-lg md:text-xl text-white inline-flex gap-2 items-baseline font-semibold gsap-add-tech-2">
            <span class="w-3 h-3 bg-gradient-to-r from-teal-400 to-yellow-200 rounded-full"></span>
            Github
          </div>
          <div class="text-lg md:text-xl text-white inline-flex gap-2 items-baseline font-semibold gsap-add-tech-3">
            <span class="w-3 h-3 bg-gradient-to-r from-teal-400 to-yellow-200 rounded-full"></span>
            Postman API
          </div>
          <div class="text-lg md:text-xl text-white inline-flex gap-2 items-baseline font-semibold gsap-add-tech-4">
            <span class="w-3 h-3 bg-gradient-to-r from-teal-400 to-yellow-200 rounded-full"></span>
            Metamask
          </div>
          <div class="text-lg md:text-xl text-white inline-flex gap-2 items-baseline font-semibold gsap-add-tech-5">
            <span class=" w-3 h-3 bg-gradient-to-r from-teal-400 to-yellow-200 rounded-full"></span>
            Nginx
          </div>
          <div class="text-lg md:text-xl text-white inline-flex gap-2 items-baseline font-semibold gsap-add-tech-6">
            <span class=" w-3 h-3 bg-gradient-to-r from-teal-400 to-yellow-200 rounded-full"></span>
            DigitalOcean
          </div>
          <div class="text-lg md:text-xl text-white inline-flex gap-2 items-baseline font-semibold gsap-add-tech-7">
            <span class=" w-3 h-3 bg-gradient-to-r from-teal-400 to-yellow-200 rounded-full"></span>
            WebSocket
          </div>
          <div class="text-lg md:text-xl text-white inline-flex gap-2 items-baseline font-semibold gsap-add-tech-8">
            <span class=" w-3 h-3 bg-gradient-to-r from-teal-400 to-yellow-200 rounded-full"></span>
            Rest APIs
          </div>
          <div class="text-lg md:text-xl text-white inline-flex gap-2 items-baseline font-semibold gsap-add-tech-9">
            <span class=" w-3 h-3 bg-gradient-to-r from-teal-400 to-yellow-200 rounded-full"></span>
            Facebook API
          </div>
          <div class="text-lg md:text-xl text-white inline-flex gap-2 items-baseline font-semibold gsap-add-tech-10">
            <span class=" w-3 h-3 bg-gradient-to-r from-teal-400 to-yellow-200 rounded-full"></span>
            Google Maps API
          </div>
          <div class="text-lg md:text-xl text-white inline-flex gap-2 items-baseline font-semibold gsap-add-tech-11">
            <span class=" w-3 h-3 bg-gradient-to-r from-teal-400 to-yellow-200 rounded-full"></span>
            Google API
          </div>
          <div class="text-lg md:text-xl text-white inline-flex gap-2 items-baseline font-semibold gsap-add-tech-12">
            <span class=" w-3 h-3 bg-gradient-to-r from-teal-400 to-yellow-200 rounded-full"></span>
            PayPal Checkout SDK
          </div>
          <div class="text-lg md:text-xl text-white inline-flex gap-2 items-baseline font-semibold gsap-add-tech-13">
            <span class=" w-3 h-3 bg-gradient-to-r from-teal-400 to-yellow-200 rounded-full"></span>
            Computer Hardware
          </div>
          <div class="text-lg md:text-xl text-white inline-flex gap-2 items-baseline font-semibold gsap-add-tech-14">
            <span class=" w-3 h-3 bg-gradient-to-r from-teal-400 to-yellow-200 rounded-full"></span>
            Object-Oriented Programming
          </div>
          <div class="text-lg md:text-xl text-white inline-flex gap-2 items-baseline font-semibold gsap-add-tech-15">
            <span class=" w-3 h-3 bg-gradient-to-r from-teal-400 to-yellow-200 rounded-full"></span>
            Smart Contract Integration
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue"
const { $gsap, $ScrollTrigger } = useNuxtApp()

onMounted(() => {
  gsapEffects()
})

const gsapEffects = () => {
  const tween = $gsap.fromTo('.scroll-trigger-add-tech', { y: 100, opacity: 0 }, { y: 0, opacity: 1 })
  const st = $ScrollTrigger.create({
    trigger: ".scroll-trigger-add-tech",
    start: "top bottom",
    end: "+=400",
    scrub: 1,
    snap: {
      snapTo: "labels",
      duration: { min: 0.2, max: 3 },
      delay: 0.2,
      ease: "power1.inOut",
    },
    animation: tween,
  })
  st.animation

  const tl = $gsap.timeline()  
  const tween2 = tl.fromTo('.gsap-add-tech-1', { x: 100, opacity: 0 }, { x: 0, duration: 0.3, opacity: 1 })
    .fromTo('.gsap-add-tech-2', { x: 100, opacity: 0 }, { x: 0, duration: 0.3, opacity: 1 })
    .fromTo('.gsap-add-tech-3', { x: 100, opacity: 0 }, { x: 0, duration: 0.3, opacity: 1 })
    .fromTo('.gsap-add-tech-4', { x: 100, opacity: 0 }, { x: 0, duration: 0.3, opacity: 1 })
    .fromTo('.gsap-add-tech-5', { x: 100, opacity: 0 }, { x: 0, duration: 0.3, opacity: 1 })
    .fromTo('.gsap-add-tech-6', { x: 100, opacity: 0 }, { x: 0, duration: 0.3, opacity: 1 })
    .fromTo('.gsap-add-tech-7', { x: 100, opacity: 0 }, { x: 0, duration: 0.3, opacity: 1 })
    .fromTo('.gsap-add-tech-8', { x: 100, opacity: 0 }, { x: 0, duration: 0.3, opacity: 1 })
    .fromTo('.gsap-add-tech-9', { x: 100, opacity: 0 }, { x: 0, duration: 0.3, opacity: 1 })
    .fromTo('.gsap-add-tech-10', { x: 100, opacity: 0 }, { x: 0, duration: 0.3, opacity: 1 })
    .fromTo('.gsap-add-tech-11', { x: 100, opacity: 0 }, { x: 0, duration: 0.3, opacity: 1 })
    .fromTo('.gsap-add-tech-12', { x: 100, opacity: 0 }, { x: 0, duration: 0.3, opacity: 1 })
    .fromTo('.gsap-add-tech-13', { x: 100, opacity: 0 }, { x: 0, duration: 0.3, opacity: 1 })
    .fromTo('.gsap-add-tech-14', { x: 100, opacity: 0 }, { x: 0, duration: 0.3, opacity: 1 })
    .fromTo('.gsap-add-tech-15', { x: 100, opacity: 0 }, { x: 0, duration: 0.3, opacity: 1 })
  $ScrollTrigger.create({
    trigger: '.gsap-add-tech-1',
    start: 'top bottom',
    end: '+=300',
    snap: {
      snapTo: 'labels',
      duration: { min: 0.2, max: 3 },
      delay: 0.2,
      ease: 'power1.inOut'
    },
    animation: tween2
  })
}
</script>