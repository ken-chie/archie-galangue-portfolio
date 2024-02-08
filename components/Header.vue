<template>
  <header>
    <nav class="px-5 md:px-7 lg:px-6 py-5 opacity-0 scroll-trigger-header" :class="{ 'opacity-100': header }">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-lg py-1 md:py-2">
        <a href="#" class="flex lg:basis-1/3 md:basis-1/4 sm:basis-full shrink items-center w-auto">
          <portfolio-header-name />
        </a>
        <div class="flex lg:basis-1/3 md:basis-1/4 sm:basis-full shrink gap-5 md:gap-3 md:order-2 w-auto justify-end">
          <ClientOnly>
            <template v-for="(social, i) in socialLinks" :key="(i as number)">
              <a :href="social.link" target="_blank" class="text-2xl text-gray-200 hover:text-white transition">
                <!-- <font-awesome-layers> -->
                <font-awesome-icon :icon="['fab', social.icon]" />
                <!-- </font-awesome-layers> -->
              </a>
            </template>
          </ClientOnly>
        </div>
        <div class="flex lg:basis-1/3 md:basis-1/2 sm:basis-full justify-between items-center shrink w-full md:w-auto md:order-1 pt-0 lg:px-0 md:px-4 sm:md:px-7">
          <ul class="flex mt-4 font-normal justify-between flex-row space-x-8 md:mt-0 w-full">
            <template v-for="(nav, ii) in navLinks" :key="(ii as number)">
              <li>
                <a
                  href="#"
                  class="group text-gray-200 hover:text-white py-3 relative w-full transition"
                  @click="smoothScrollTo(nav.target)"
                >
                  {{ nav.link }}
                  <span class="ease absolute bottom-0 h-0.5 block w-0 bg-gradient-to-r group-hover:from-teal-400 group-hover:to-yellow-200 transition-all duration-200 group-hover:w-full"></span>
                </a>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp()

const header = ref(false)

const socialLinks = ref([
  { link: 'https://www.facebook.com/8.chiee', icon: 'facebook' },
  { link: 'https://www.linkedin.com/in/archie-galangue-81ba89141/', icon: 'linkedin' },
  { link: 'https://github.com/chie-ai', icon: 'github' }
])

const navLinks = ref([
  { link: 'Projects', target: 'projects' },
  { link: 'Technology', target: 'technology' },
  { link: 'Work Experience', target: 'work-experience' }
])

onBeforeMount(() => {
  header.value = true
})

onMounted(() => {
  const lt = $gsap.timeline()
  lt.fromTo('.scroll-trigger-header', { y: -50, opacity: 0 }, { y: 0, duration: 1.1, opacity: 1 })
})

const smoothScrollTo = (target: string) => {
  $gsap.to(window, {
    duration: 1,
    scrollTo: `#${target}`,
    ease: "power2",
  })
}
</script>
