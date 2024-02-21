<template>
  <div class="px-6 md:px-7 lg:px-6 pt-0 lg:pt-20">
    <div class="grid grid-cols-12 mx-auto max-w-screen-lg headline">
      <div class="col-span-12 text-justify md:text-left md:col-span-9 pt-6 md:pt-20">
        <p
          class="text-3xl md:text-7xl font-semibold opacity-0 gsap-hello"
          :class="{ 'opacity-100': intro }"
        >
          <span class="bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent inline-block">
          Hello, I'm Archie,
          </span>
        </p>
        <p
          class="text-white text-3xl md:text-7xl font-semibold opacity-0 gsap-role"
          :class="{ 'opacity-100': intro }"
        >
          software developer
        </p>
        <p class="text-slate-400 text-lg my-6 md:my-12 opacity-0 gsap-intro" :class="{ 'opacity-100': intro }">
          Experienced software developer specializing Vue.js, particularly Nuxt and Quasar frameworks,
          with a strong proficiency in CSS frameworks including Bootstrap and Tailwind CSS.
          Skilled in integrating front-end technologies with backend services,
          with a focus on utilizing Django Rest Frameworks for efficient communication between client and server.
          <!-- Experienced Software Developer with a demonstrative history working in the information technology and services industry with more than 6 years of programming experience. -->
        </p>
      </div>
      <div class="col-span-12 md:col-span-3 pt-2 md:pt-16 px-20 md:px-0 gsap-profile">
        <div
          class="rounded-full p-0.5 bg-gradient-to-r from-teal-400 to-yellow-200 shadow-2xl shadow-teal-400/50 opacity-0"
          :class="{ 'opacity-100': intro }"
        >
          <img src="~/assets/profile/my_pic.png" alt="Profile" class="rounded-full">
        </div>
      </div>
    </div>
    <div class="flex mx-auto max-w-screen-lg pt-7 md:pt-0 place-content-center md:place-content-start opacity-0 gsap-dl" :class="{ 'opacity-100': intro }">
      <button
        type="button"
        class="text-white text-md lg:text-xl font-medium transition-all duration-500 bg-gradient-to-r from-teal-400 to-yellow-200 hover:from-emerald-400 hover:to-cyan-400 shadow-xl shadow-teal-400/50 rounded-full px-8 py-3 lg:py-4"
        @click="downloadCV"
      >
        Download CV
      </button>
      <!-- focus:ring-4 focus:ring-blue-300  -->
    </div>
  </div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp()

const intro = ref(false)

onMounted(() => {
  intro.value = true

  const lt = $gsap.timeline()
  lt.fromTo(".gsap-hello", { x: -100, opacity: 0 }, { x: 0, duration: 0.7, opacity: 1 })
    .fromTo(".gsap-role", { x: -100, opacity: 0 }, { x: 0, duration: 0.7, opacity: 1 })
    .fromTo(".gsap-intro", { x: -100, opacity: 0 }, { x: 0, duration: 0.7, opacity: 1 })
    .fromTo(".gsap-profile", { x: 100, opacity: 0 }, { x: 0, duration: 0.7, opacity: 1 }, "<")
    .fromTo(".gsap-dl", { x: -100, opacity: 0 }, { x: 0, duration: 0.7, opacity: 1 })
})

const downloadCV = () => {
  const link = document.createElement('a')
  link.href = '/curiculum-vitae/Archie-Galangue-Curiculum-Vitae.pdf'
  link.download = 'Archie-Galangue-Curiculum-Vitae.pdf'
  link.target = '_blank'
  link.click()
}
</script>
