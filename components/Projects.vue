<template>
  <div class="px-6 md:px-7 lg:px-6 w-full pt-8 lg:pt-20">
    <div id="projects" class="mx-auto max-w-screen-lg pt-2 lg:pt-0">
      <p class="text-2xl md:text-5xl text-white font-semibold my-6 md:my-12">Projects</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto max-w-screen-lg scroll-trigger-project">
        <div class="atropos my-project-1">
          <div class="atropos-scale">
            <div class="atropos-rotate">
              <div class="atropos-inner">
                <div class="rounded-3xl bg-gradient-to-r from-teal-400 to-yellow-200 p-[1px]">
                  <div class="rounded-[24px] h-full bg-gray-800 back p-8">
                    <img src="~/assets/projects/gambling-apes.png" alt="apes">
                    <p class="text-xl md:text-3xl font-semibold my-4 text-white">Gambling Apes Club</p>

                    <div class="block h-28">
                      <p class="text-slate-400">
                        A <span class="line-through">clone</span> <span class="text-orange-400">perked up</span> version of Bored Apes in SmartBCH blockchain. Aside from having different traits permutations, we have added unique high quality specials and rares.
                      </p>
                    </div>
                    <a
                      href="#?"
                      class="block text-center w-full mt-6 md:mt-12 text-white text-xl font-medium shadow-lg shadow-teal-400/50 bg-gradient-to-r from-teal-400 to-yellow-200 hover:from-emerald-400 hover:to-cyan-400 focus:ring-4 focus:ring-blue-300 rounded-full px-8 py-4"
                    >
                      Live Preview
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="atropos my-project-2">
          <div class="atropos-scale">
            <div class="atropos-rotate">
              <div class="atropos-inner">
                <div class="rounded-3xl bg-gradient-to-r from-teal-400 to-yellow-200 p-[1px]">
                  <div class="rounded-[24px] h-full bg-gray-800 back p-8">
                    <img src="~/assets/projects/spice-nft-series.png" alt="ApeBets">
                    <p class="text-xl md:text-3xl font-semibold my-4 text-white">Spice NFT Series</p>

                    <div class="block h-28">
                      <p class="text-slate-400">Spice token is all about recognition and showing appreciation. Hence, we launched this NFT series to recognize exceptional artistic talents and provide a new venue where their artwork can be appreciated and patronized.</p>
                    </div>
                    <a
                      href="#?"
                      class="block text-center w-full mt-6 md:mt-12 text-white text-xl font-medium shadow-lg shadow-teal-400/50 bg-gradient-to-r from-teal-400 to-yellow-200 hover:from-emerald-400 hover:to-cyan-400 focus:ring-4 focus:ring-blue-300 rounded-full px-8 py-4"
                    >
                      Live Preview
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue"
import Atropos from "atropos"

const { $gsap, $ScrollTrigger } = useNuxtApp()

onMounted(() => {
  atroposEffects()
  gsapEffects()
})

const atroposEffects = () => {
  const els = ['.my-project-1', '.my-project-2']
  for (let key in els) {
    Atropos({
      el: els[key],
      activeOffset: 40,
      rotate: false,
      shadow: false
    })
  }
}

const gsapEffects = () => {
  const tween = $gsap.fromTo('.scroll-trigger-project', { y: 100, opacity: 0 }, { y: 0, opacity: 1 })
  const st = $ScrollTrigger.create({
    trigger: ".scroll-trigger-project",
    start: "top bottom",
    end: "+=700",
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