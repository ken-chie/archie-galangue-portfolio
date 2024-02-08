<template>
  <div class="px-6 md:px-7 lg:px-6 w-full pt-8 lg:pt-20">
    <div id="projects" class="mx-auto max-w-screen-lg pt-2 lg:pt-0">
      <p class="text-2xl md:text-5xl text-white font-semibold my-6 md:my-12">Projects</p>
      <!-- <p class="text-white font-semibold my-6 md:my-12">{{ token }}</p> -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto max-w-screen-lg scroll-trigger-project">
        <template v-for="(project, i) in projects" :key="(i as number)">
          <div :class="`atropos my-project-${(i as number)++}`">
            <div class="atropos-scale">
              <div class="atropos-rotate">
                <div class="atropos-inner py-1">
                  <div class="rounded-3xl bg-gradient-to-r from-teal-400 to-yellow-200 p-[3px]">
                    <div class="rounded-[22px] h-full bg-gray-800 back p-8">
                      <template v-if="images">
                        <img :src="images[project.img]" alt="project" />
                      </template>
                      <p class="text-xl md:text-3xl font-semibold mt-5 mb-4 text-white">{{ project.name }}</p>

                      <div class="block h-auto lg:h-32">
                        <p class="text-slate-400" v-html="project.description"></p>
                      </div>
                      <div class="mt-6">
                        <p class="text-xl text-white">Tech stack</p>
                        <p class="text-slate-400">
                          {
                            <template v-for="(tech, ii) in project.techStack" :key="(ii as number)">
                              {{ ((ii as number) === (project.techStack.length-1) ? `${tech}` : `${tech}, `) }}
                            </template>
                          }
                        </p>
                      </div>
                      <hr class="h-0.5 w-32 border-t-0 bg-slate-400 opacity-100 dark:opacity-50 mb-6 md:mb-7 mt-6 md:mt-8 rounded-full mx-auto" />
                      <div class="flex flex-wrap gap-3 justify-center">
                        <template v-for="(anchor, iii) in project.anchors" :key="(iii as number)">
                          <template v-if="anchor.name === 'web'">
                            <a
                              ref="website"
                              :href="anchor.link"
                              target="blank_"
                              class="flex justify-center items-center text-center w-12 h-12 text-white text-md lg:text-xl font-medium shadow-lg shadow-teal-400/50 bg-gradient-to-r from-teal-400 to-yellow-200 hover:from-emerald-400 hover:to-cyan-400 rounded-full"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 512 512">
                              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                              <path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"/>
                              </svg>
                            </a>
                          </template>
                          <template v-if="anchor.name === 'telegram'">
                            <a
                              ref="telegram"
                              :href="anchor.link"
                              target="blank_"
                              class="flex justify-center items-center text-center w-12 h-12 text-white text-md lg:text-xl font-medium shadow-lg shadow-teal-400/50 bg-gradient-to-r from-teal-400 to-yellow-200 hover:from-emerald-400 hover:to-cyan-400 rounded-full"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 496 512">
                              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                              <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"/>
                              </svg>
                            </a>
                          </template>
                          <template v-if="anchor.name === 'google-play-store'">
                            <tippy content='Google Play Store' animation='scale' :animateFill="true" theme="translucent">
                              <a
                                :href="anchor.link"
                                target="blank_"
                                class="flex justify-center items-center text-center w-12 h-12 text-white text-md lg:text-xl font-medium shadow-lg shadow-teal-400/50 bg-gradient-to-r from-teal-400 to-yellow-200 hover:from-emerald-400 hover:to-cyan-400 rounded-full"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 576 512">
                                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"/>
                                </svg>
                              </a>
                            </tippy>
                          </template>
                          <template v-if="anchor.name === 'chrome-web-store'">
                            <tippy content='Chrome web store' animation='scale' :animateFill="true" theme="translucent">
                              <a
                                :href="anchor.link"
                                target="blank_"
                                class="flex justify-center items-center text-center w-12 h-12 text-white text-md lg:text-xl font-medium shadow-lg shadow-teal-400/50 bg-gradient-to-r from-teal-400 to-yellow-200 hover:from-emerald-400 hover:to-cyan-400 rounded-full"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 512 512">
                                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path d="M0 256C0 209.4 12.47 165.6 34.27 127.1L144.1 318.3C166 357.5 207.9 384 256 384C270.3 384 283.1 381.7 296.8 377.4L220.5 509.6C95.9 492.3 0 385.3 0 256zM365.1 321.6C377.4 302.4 384 279.1 384 256C384 217.8 367.2 183.5 340.7 160H493.4C505.4 189.6 512 222.1 512 256C512 397.4 397.4 511.1 256 512L365.1 321.6zM477.8 128H256C193.1 128 142.3 172.1 130.5 230.7L54.19 98.47C101 38.53 174 0 256 0C350.8 0 433.5 51.48 477.8 128V128zM168 256C168 207.4 207.4 168 256 168C304.6 168 344 207.4 344 256C344 304.6 304.6 344 256 344C207.4 344 168 304.6 168 256z"/>
                                </svg>
                              </a>
                            </tippy>
                          </template>
                          <template v-if="anchor.name === 'twitter'">
                            <tippy content='Twitter' animation='scale' :animateFill="true" theme="translucent">
                              <a
                                :href="anchor.link"
                                target="blank_"
                                class="flex justify-center items-center text-center w-12 h-12 text-white text-md lg:text-xl font-medium shadow-lg shadow-teal-400/50 bg-gradient-to-r from-teal-400 to-yellow-200 hover:from-emerald-400 hover:to-cyan-400 rounded-full"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 512 512">
                                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                                </svg>
                              </a>
                            </tippy>
                          </template>
                          <template v-if="anchor.name === 'facebook'">
                            <tippy content='Facebook' animation='scale' :animateFill="true" theme="translucent">
                              <a
                                :href="anchor.link"
                                target="blank_"
                                class="flex justify-center items-center text-center w-12 h-12 text-white text-md lg:text-xl font-medium shadow-lg shadow-teal-400/50 bg-gradient-to-r from-teal-400 to-yellow-200 hover:from-emerald-400 hover:to-cyan-400 rounded-full"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 512 512">
                                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/>
                                </svg>
                              </a>
                            </tippy>
                          </template>
                          <template v-if="anchor.name === 'instagram'">
                            <tippy content='Instagram' animation='scale' :animateFill="true" theme="translucent">
                              <a
                                :href="anchor.link"
                                target="blank_"
                                class="flex justify-center items-center text-center w-12 h-12 text-white text-md lg:text-xl font-medium shadow-lg shadow-teal-400/50 bg-gradient-to-r from-teal-400 to-yellow-200 hover:from-emerald-400 hover:to-cyan-400 rounded-full"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 448 512">
                                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                                </svg>
                              </a>
                            </tippy>
                          </template>
                          <template v-if="anchor.name === 'linkedin'">
                            <tippy content='LinkedIn' animation='scale' :animateFill="true" theme="translucent">
                              <a
                                :href="anchor.link"
                                target="blank_"
                                class="flex justify-center items-center text-center w-12 h-12 text-white text-md lg:text-xl font-medium shadow-lg shadow-teal-400/50 bg-gradient-to-r from-teal-400 to-yellow-200 hover:from-emerald-400 hover:to-cyan-400 rounded-full"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 448 512">
                                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                                </svg>
                              </a>
                            </tippy>
                          </template>
                          <template v-if="anchor.name === 'youtube'">
                            <tippy content='Youtube' animation='scale' :animateFill="true" theme="translucent">
                              <a
                                :href="anchor.link"
                                target="blank_"
                                class="flex justify-center items-center text-center w-12 h-12 text-white text-md lg:text-xl font-medium shadow-lg shadow-teal-400/50 bg-gradient-to-r from-teal-400 to-yellow-200 hover:from-emerald-400 hover:to-cyan-400 rounded-full"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 576 512">
                                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                                </svg>
                              </a>
                            </tippy>
                          </template>
                          <template v-if="anchor.name === 'github'">
                            <tippy content='Github' animation='scale' :animateFill="true" theme="translucent">
                              <a
                                :href="anchor.link"
                                target="blank_"
                                class="flex justify-center items-center text-center w-12 h-12 text-white text-md lg:text-xl font-medium shadow-lg shadow-teal-400/50 bg-gradient-to-r from-teal-400 to-yellow-200 hover:from-emerald-400 hover:to-cyan-400 rounded-full"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 496 512">
                                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                                </svg>
                              </a>
                            </tippy>
                          </template>
                        </template>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Tippy } from 'vue-tippy'
import { useTippy } from 'vue-tippy'
import { useImagesStore } from '@/stores/images'

const imageStore = useImagesStore()
const images: Ref<{ [key: string]: any } | null> = ref(null)

/* Use vue-tippy */
const website: Ref<any> = ref(undefined)
const telegram: Ref<any> = ref(undefined)
useTippy(website, { content: 'Website', theme: 'translucent', animation: 'scale', animateFill: true })
useTippy(telegram, { content: 'Telegram', theme: 'translucent', animation: 'scale', animateFill: true })
/**/

const projects = ref([
  {
    name: 'Gambling Apes Club',
    img: 'gambling-apes',
    description: 'A <span class="line-through">clone</span> <span class="text-orange-400">perked up</span> version of Bored Apes in SmartBCH blockchain. Aside from having different traits permutations, we have added unique high quality specials and rares.',
    techStack: [ 'Nuxt', 'Django Rest Framework' ],
    anchors: [
      { name: 'web', link: 'https://apes.cash/' },
      { name: 'telegram', link: 'https://t.me/apescash' }
    ]
  },
  {
    name: 'Spice NFT Series',
    img: 'spice-nft-series',
    description: 'Spice token is all about recognition and showing appreciation. Hence, we launched this NFT series to recognize exceptional artistic talents and provide a new venue where their artwork can be appreciated and patronized.',
    techStack: [ 'Nuxt', 'Django Rest Framework' ],
    anchors: [
      { name: 'web', link: 'https://spicenft.art/' },
      { name: 'telegram', link: 'https://t.me/apescash' }
    ]
  },
  {
    name: 'Paytaca',
    img: 'paytaca',
    description: 'The Paytaca app brings to you the full power of peer-to-peer cash at your fingertips.\
                  Bitcoin Cash (BCH) is best positioned to become peer-to-peer electronic cash for world.\
                  We built the wallet that makes BCH useful for the masses --\
                  the next billion users we will onboard to crypto for its actual utility',
    techStack: [ 'Quasar', 'Django Rest Framework' ],
    anchors: [
      { name: 'web', link: 'https://paytaca.com/' },
      { name: 'google-play-store', link: 'https://play.google.com/store/apps/details?id=com.paytaca.app' },
      { name: 'chrome-web-store', link: 'https://chrome.google.com/webstore/detail/paytaca/pakphhpnneopheifihmjcjnbdbhaaiaa' },
      { name: 'twitter', link: 'https://twitter.com/_paytaca_' },
      { name: 'facebook', link: 'https://www.facebook.com/paytaca' },
      { name: 'youtube', link: 'https://www.youtube.com/@paytaca6473' },
      { name: 'github', link: 'https://github.com/paytaca/paytaca-app' }
    ]
  },
  {
    name: 'PureplyPeer',
    img: 'purelypeer',
    description: 'Discover the thrill of quest hunting with PurelyPeer. The ultimate decentralized wallet for modern quest hunters! Earn Bitcoin Cash and dominate the virtual world like never before!',
    techStack: [ 'Quasar', 'Django Rest Framework' ],
    anchors: [
      { name: 'web', link: 'https://purelypeer.cash/' },
      { name: 'google-play-store', link: 'https://play.google.com/store/apps/details?id=cash.purelypeer.app&hl=en&gl=US' },
      { name: 'telegram', link: 'https://t.me/PurelyPeer' },
      { name: 'twitter', link: 'https://twitter.com/PurelyPeer' }
    ]
  },
  {
    name: 'iKonek Klesia',
    img: 'ikonek',
    description: 'Explore the profound connection between faith and the digital age with discussions centered around the innovative Ikonek app. Delve into the intersection of religion and modernity, as we navigate the impact of technology on religious practices, community building, and spiritual experiences.',
    techStack: [ 'Nuxt', 'Django Rest Framework' ],
    anchors: [
      { name: 'google-play-store', link: 'https://play.google.com/store/apps/details?id=cash.purelypeer.app&hl=en&gl=US' },
    ]
  },
])

const { $gsap } = useNuxtApp()

onMounted(() => {
  gsapEffects()
  images.value = imageStore.images
})

const gsapEffects = () => {
  $gsap.fromTo('.scroll-trigger-project', { y: 100, opacity: 0 }, {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".scroll-trigger-project",
      start: "top bottom",
      end: "+=450",
      scrub: 1,
      snap: {
        snapTo: "labels",
        duration: { min: 0.2, max: 3 },
        delay: 0.2,
        ease: "power1.inOut",
      }
    }
  })
}
</script>
