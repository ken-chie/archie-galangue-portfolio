<template>
  <div class="px-6 md:px-7 lg:px-6 w-full pt-8 lg:pt-20">
    <div class="mx-auto max-w-screen-lg">
      <p class="text-2xl md:text-5xl text-white font-semibold my-6 md:my-12">Additional technologies and skills</p>
      <div class="block">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 scroll-trigger-add-tech">
          <template v-for="(tech, index) in additionalTech" :key="(index as number)">
            <div class="text-lg md:text-xl text-white inline-flex gap-2 items-baseline font-semibold" :class="`gsap-add-tech-${(index as number)++}`">
              <span class="w-3 h-3 bg-gradient-to-r from-teal-400 to-yellow-200 rounded-full"></span>
              {{ tech }}
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $gsap, $ScrollTrigger } = useNuxtApp()

const additionalTech = ref([
  'Git',
  'Github',
  'Amazon Web Services (AWS)',
  'Metamask',
  'Nginx',
  'DigitalOcean',
  'WebSocket',
  'Rest APIs',
  'Facebook API',
  'Google Maps API',
  'Google API',
  'PayPal Checkout SDK',
  'Postman API',
  'Object-Oriented Programming',
  'Smart Contract Integration'
])

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

  const tl = $gsap.timeline({ repeatRefresh: true })
  for (let key in additionalTech.value) {
    tl.fromTo(`.gsap-add-tech-${key}`, { x: 100, opacity: 0 }, { x: 0, duration: 0.3, opacity: 1 })
  }
  const tween2 = tl
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