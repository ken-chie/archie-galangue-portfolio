<template>
  <div class="px-6 md:px-7 lg:px-6 w-full pt-0 lg:pt-20">
    <div class="grid grid-cols-12 mx-auto max-w-screen-lg headline">
      <div class="col-span-12 md:col-span-9 pt-6 md:pt-20">
        <p
          class="text-3xl md:text-7xl font-semibold bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent opacity-0 gsap-hello"
          :class="{ 'opacity-100': intro }"
        >
          Hello, I'm Archie,
        </p>
        <p
          class="text-white text-3xl md:text-7xl font-semibold opacity-0 gsap-role"
          :class="{ 'opacity-100': intro }"
        >
          software developer
        </p>
        <p class="text-slate-400 text-lg my-6 md:my-12 opacity-0 gsap-intro" :class="{ 'opacity-100': intro }">
          Experienced Software Developer with a demonstrative history working in the information technology and services industry with more than 6 years of programming experience.
        </p>
      </div>
      <div class="col-span-12 md:col-span-3 pt-2 md:pt-16 px-20 md:px-0 gsap-profile">
        <!-- <div class="absolute right-[-100px] w-full"> -->
          <div
            class="rounded-full p-0.5 bg-gradient-to-r from-teal-400 to-yellow-200 shadow-2xl shadow-teal-400/50 opacity-0"
            :class="{ 'opacity-100': intro }"
          >
            <img src="~/assets/profile/my_pic.jpg" alt="Profile" class="rounded-full">
          </div>
        <!-- </div> -->
      </div>
    </div>
    <div class="flex mx-auto max-w-screen-lg pt-7 md:pt-0 place-content-center md:place-content-start opacity-0 gsap-dl" :class="{ 'opacity-100': intro }">
      <button
        type="button"
        class="text-white text-xl font-medium transition-all duration-500 bg-gradient-to-r from-teal-400 to-yellow-200 hover:from-emerald-400 hover:to-cyan-400 focus:ring-4 focus:ring-blue-300 shadow-xl shadow-teal-400/50 rounded-full px-8 py-4"
      >
        Download CV
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const { $gsap, $ScrollSmoother } = useNuxtApp()

const intro = ref(false)

onMounted(() => {
  intro.value = true

  const lt = $gsap.timeline()
  lt.fromTo(".gsap-hello", { x: -100, opacity: 0 }, { x: 0, duration: 0.7, opacity: 1 })
    .fromTo(".gsap-role", { x: -100, opacity: 0 }, { x: 0, duration: 0.7, opacity: 1 })
    .fromTo(".gsap-intro", { x: -100, opacity: 0 }, { x: 0, duration: 0.7, opacity: 1 })
    .fromTo(".gsap-dl", { x: -100, opacity: 0 }, { x: 0, duration: 0.7, opacity: 1 })
  $gsap.fromTo(".gsap-profile", { x: 100, opacity: 0 }, { x: 0, duration: 0.7, opacity: 1 })
})
</script>