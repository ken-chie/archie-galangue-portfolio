<template>
  <div class="px-6 md:px-7 lg:px-6 w-full pt-6 lg:pt-20">
    <div id="technology" class="mx-auto max-w-screen-lg pt-2 lg:pt-0">
      <p class="text-2xl md:text-5xl text-white font-semibold my-6 md:my-12">Technologies</p>
      <div class="scroll-trigger-tech">
        <template v-for="(tech, i) in technologies" :key="(i as number)">
          <div class="block mb-8" :class="`scroll-trigger-tech-${(i as number)++}`">
            <p class="text-white text-lg md:text-xl font-semibold mb-3">{{ tech.name }}</p>
            <div class="w-full bg-gray-200 rounded-full bg-gray-700">
              <div
                class="bg-gradient-to-r from-teal-400 to-yellow-200 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full"
                :style="{ width: tech.percent }"
              />
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $gsap, $ScrollTrigger } = useNuxtApp()

const technologies = ref([
  { name: 'HTML5', percent: '90%', x: -150 },
  { name: 'Bootstrap & Tailwind CSS', percent: '90%', x: 150 },
  { name: 'CSS3, SCSS & Sass', percent: '90%', x: -150 },
  { name: 'Javascript (ES6), JQuery', percent: '80%', x: 150 },
  { name: 'Typescript', percent: '70%', x: 150 },
  { name: 'Axios, AJAX', percent: '90%', x: -150 },
  { name: 'Vue.js, Nuxt 3, Quasar', percent: '85%', x: 150 },
  { name: 'Vuex & Pinia', percent: '95%', x: -150 },
  { name: 'React.js, Next.js', percent: '25%', x: 150 },
  { name: 'Django, Django Rest Framework', percent: '80%', x: -150 },
  { name: 'SQL, MySQL, PostgreSQL', percent: '80%', x: 150 },
])

onMounted(() => {
  gsapEffects()

  window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
      gsapEffects()
    }
  })
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

  const tl = $gsap.timeline({ repeatRefresh: true })
  for (let key in technologies.value) {
    tl.fromTo(`.scroll-trigger-tech-${key}`, { x: (parseInt(key, 10) % 2) == 1 ? 150 : -150, opacity: 0 }, { x: 0, duration: 0.5, opacity: 1 }) 
  }
  const tween2 = tl
  const st2 = $ScrollTrigger.create({
    trigger: ".scroll-trigger-tech-1",
    // start: "top bottom",
    // end: "+=600",
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