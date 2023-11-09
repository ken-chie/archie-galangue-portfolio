import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'
import { faGithubSquare, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add( faGithubSquare, faFacebook, faLinkedin)

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
  nuxtApp.vueApp.component('font-awesome-layers', FontAwesomeLayers, {})
})