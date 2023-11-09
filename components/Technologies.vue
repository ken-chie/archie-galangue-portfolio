<template>
  <div class="px-6 md:px-7 lg:px-6 w-full pt-6 lg:pt-20">
    <div id="technology" class="mx-auto max-w-screen-lg pt-2 lg:pt-0">
      <p class="text-2xl md:text-5xl text-white font-semibold my-6 md:my-12">Technologies</p>
      <div class="scroll-trigger-tech">
        <div class="block mb-8 scroll-trigger-tech-1">
          <p class="text-white text-lg md:text-xl font-semibold mb-3">HTML5</p>
          <div class="w-full bg-gray-200 rounded-full bg-gray-700">
            <div
              class="bg-gradient-to-r from-teal-400 to-yellow-200 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full"
              style="width: 90%"
            />
          </div>
        </div>
        <div class="block mb-8 scroll-trigger-tech-2">
          <p class="text-white text-lg md:text-xl font-semibold mb-3">Bootstrap & Tailwind CSS</p>
          <div class="w-full bg-gray-200 rounded-full bg-gray-700">
            <div
              class="bg-gradient-to-r from-teal-400 to-yellow-200 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full"
              style="width: 90%"
            />
          </div>
        </div>
        <div class="block mb-8 scroll-trigger-tech-3">
          <p class="text-white text-lg md:text-xl font-semibold mb-3">CSS3, SCSS & Sass</p>
          <div class="w-full bg-gray-200 rounded-full bg-gray-700">
            <div
              class="bg-gradient-to-r from-teal-400 to-yellow-200 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full"
              style="width: 90%"
            />
          </div>
        </div>
        <div class="block mb-8 scroll-trigger-tech-4">
          <p class="text-white text-lg md:text-xl font-semibold mb-3">Javascript (ES6), Typescript, JQuery</p>
          <div class="w-full bg-gray-200 rounded-full bg-gray-700">
            <div
              class="bg-gradient-to-r from-teal-400 to-yellow-200 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full"
              style="width: 80%"
            />
          </div>
        </div>
        <div class="block mb-8 scroll-trigger-tech-5">
          <p class="text-white text-lg md:text-xl font-semibold mb-3">Axios, AJAX</p>
          <div class="w-full bg-gray-200 rounded-full bg-gray-700">
            <div
              class="bg-gradient-to-r from-teal-400 to-yellow-200 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full"
              style="width: 90%"
            />
          </div>
        </div>
        <div class="block mb-8 scroll-trigger-tech-6">
          <p class="text-white text-lg md:text-xl font-semibold mb-3">Vue.js, Nuxt 3, Quasar</p>
          <div class="w-full bg-gray-200 rounded-full bg-gray-700">
            <div
              class="bg-gradient-to-r from-teal-400 to-yellow-200 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full"
              style="width: 85%"
            />
          </div>
        </div>
        <div class="block mb-8 scroll-trigger-tech-7">
          <p class="text-white text-lg md:text-xl font-semibold mb-3">Vuex & Pinia</p>
          <div class="w-full bg-gray-200 rounded-full bg-gray-700">
            <div
              class="bg-gradient-to-r from-teal-400 to-yellow-200 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full"
              style="width: 95%"
            />
          </div>
        </div>
        <div class="block mb-8 scroll-trigger-tech-8">
          <p class="text-white text-lg md:text-xl font-semibold mb-3">Django, Django Rest Framework</p>
          <div class="w-full bg-gray-200 rounded-full bg-gray-700">
            <div
              class="bg-gradient-to-r from-teal-400 to-yellow-200 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full"
              style="width: 80%"
            />
          </div>
        </div>
        <div class="block scroll-trigger-tech-9">
          <p class="text-white text-lg md:text-xl font-semibold mb-3">SQL, MySQL, PostgreSQL</p>
          <div class="w-full bg-gray-200 rounded-full bg-gray-700">
            <div
              class="bg-gradient-to-r from-teal-400 to-yellow-200 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full"
              style="width: 80%"
            />
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
  
  const tween = $gsap.fromTo(".scroll-trigger-tech", { y: 100, opacity: 0 }, { y: 0, opacity: 1 })
  const st = $ScrollTrigger.create({
    trigger: ".scroll-trigger-tech",
    start: "top bottom",
    end: "+=300",
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
  const tween2 = tl.fromTo(".scroll-trigger-tech-1", { x: -150, opacity: 0 }, { x: 0, duration: 0.5, opacity: 1 })
      .fromTo(".scroll-trigger-tech-2", { x: 150, opacity: 0 }, { x: 0, duration: 0.5, opacity: 1 })
      .fromTo(".scroll-trigger-tech-3", { x: -150, opacity: 0 }, { x: 0, duration: 0.5, opacity: 1 })
      .fromTo(".scroll-trigger-tech-4", { x: 150, opacity: 0 }, { x: 0, duration: 0.5, opacity: 1 })
      .fromTo(".scroll-trigger-tech-5", { x: -150, opacity: 0 }, { x: 0, duration: 0.5, opacity: 1 })
      .fromTo(".scroll-trigger-tech-6", { x: 150, opacity: 0 }, { x: 0, duration: 0.5, opacity: 1 })
      .fromTo(".scroll-trigger-tech-7", { x: -150, opacity: 0 }, { x: 0, duration: 0.5, opacity: 1 })
      .fromTo(".scroll-trigger-tech-8", { x: 150, opacity: 0 }, { x: 0, duration: 0.5, opacity: 1 })
      .fromTo(".scroll-trigger-tech-9", { x: -150, opacity: 0 }, { x: 0, duration: 0.5, opacity: 1 })
  const st2 = $ScrollTrigger.create({
    trigger: ".scroll-trigger-tech-1",
    start: "top bottom",
    end: "+=600",
    snap: {
      snapTo: "labels",
      duration: { min: 0.2, max: 3 },
      delay: 0.2,
      ease: "power1.inOut",
    },
    animation: tween2,
  })
  st2.animation
}
</script>