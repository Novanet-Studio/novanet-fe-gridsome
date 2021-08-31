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
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false
library.add(faFacebook, faTwitter, faInstagram, faWhatsapp, faWhatsapp, faCaretLeft)

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Home', Home)
  Vue.component('Page', Page)
  Vue.component('font-awesome', FontAwesomeIcon)
}
