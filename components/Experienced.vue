<template>
  <div class="px-6 md:px-7 lg:px-6 w-full pt-6 lg:pt-12">
    <div id="work-experience" class="mx-auto max-w-screen-lg pt-2 lg:pt-12">
      <p class="text-2xl md:text-5xl text-white font-semibold my-6 md:my-12">Work Experience</p>
      <div class="block scroll-trigger-work-experience">
        <ol class="hidden sm:flex">
          <template v-for="(exp, i) in experience" :key="(i as number)">
            <li class="relative mb-6 sm:mb-0 basis-1/3">
              <div class="flex items-center">
                <div class="z-10 flex items-center justify-center w-6 h-6 bg-gradient-to-r from-teal-400 to-yellow-200 rounded-full ring-0 sm:ring-8 ring-gray-700 shrink-0">
                  <svg class="w-2.5 h-2.5 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                  </svg>
                </div>
                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div class="mt-3 sm:pr-8">
                <h3 class="text-lg font-semibold text-white">{{ exp.company }}</h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {{ exp.years }}
                </time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  {{ exp.description }}
                </p>
              </div>
            </li>
          </template>
        </ol>

        <ol class="block md:hidden relative border-l border-gray-200 dark:border-gray-700">                  
          <template v-for="(exp, ii) in experience" :key="(ii as number)">
            <li class="mb-10 ml-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-gradient-to-r from-teal-400 to-yellow-200 rounded-full -left-3 ring-8 ring-gray-900 dark:ring-gray-900 dark:bg-blue-900">
                  <svg class="w-2.5 h-2.5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                  </svg>
              </span>
              <h3 class="mb-1 text-lg font-semibold text-white">Aktus Global Management</h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                April - July 2017
              </time>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Improved and maintained existing payroll system, i.e., Dashpayroll system for desktop.
              </p>
            </li>
          </template>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $gsap, $ScrollTrigger } = useNuxtApp()
const experience = ref([
  {
    company: 'Aktus Global Management',
    years: 'April - July 2017',
    description: 'Improved and maintained existing payroll system, i.e., Dashpayroll system for desktop.'
  },
  {
    company: 'EVRMC',
    years: 'August 2017 - December 2020',
    description: "Full-stack developer, tasked with developing and maintaining local/internal projects, i.e., PDMS and WCPRS, to manage the department's end-users tasks with ease."
  },
  {
    company: 'Scibiz Informatics',
    years: 'January 2020 - present',
    description: 'Develop stable and fault-tolerant software, mainly on the frontend. Implement UI/UX design and deliver asssigned task based on requirement specifications.'
  }
])

onMounted(() => {
  gsapEffects()
})

const gsapEffects = () => {
  const tween = $gsap.fromTo('.scroll-trigger-work-experience', { y: 100, opacity: 0 }, { y: 0, opacity: 1 })
  const st = $ScrollTrigger.create({
    trigger: ".scroll-trigger-work-experience",
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
}
</script>
