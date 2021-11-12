// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vue from 'vue'

//Layout por defecto
import Home from '~/layouts/Home.vue'
import Page from '~/layouts/Page.vue'

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import {
  faTwitter,
  faInstagram,
  faWhatsapp,
  faTelegram,
  faPinterest,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons'
import { faCaretLeft, faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

import VueSocialSharing from 'vue-social-sharing'

config.autoAddCss = false
library.add(
  faFacebookF,
  faTwitter,
  faInstagram,
  faWhatsapp,
  faTelegram,
  faPinterest,
  faCaretLeft,
  faTimes,
)

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  head.htmlAttrs = { lang: 'es' }
  Vue.component('Home', Home)
  Vue.component('Page', Page)
  Vue.component('font-awesome', FontAwesomeIcon)
  Vue.use(VueSocialSharing)
}
