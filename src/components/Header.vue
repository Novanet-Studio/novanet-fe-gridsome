<template>
  <header class="header">
    <div class="header__index">
      <Trigram />
      <Sidebar>
        <nav class="nav--main">
          <g-link class="nav__link" to="/nosotros/">
            <div data-icon="f" class="nav__icon icon"></div>
            <p class="nav__title">Nosotros</p>
          </g-link>
          <g-link class="nav__link" to="/servicios/">
            <div data-icon="m" class="nav__icon icon"></div>
            <p class="nav__title">Servicios</p>
          </g-link>
          <g-link class="nav__link" to="/portafolio/">
            <div data-icon="t" class="nav__icon icon"></div>
            <p class="nav__title">Portafolio</p>
          </g-link>
          <g-link class="nav__link" to="/blog/">
            <div data-icon="q" class="nav__icon icon"></div>
            <p class="nav__title">Blog</p>
          </g-link>
          <g-link class="nav__link blue" to="/contacto/">
            <div data-icon="z" class="nav__icon icon"></div>
            <p class="nav__title">Contacto</p>
          </g-link>
        </nav>
      </Sidebar>

      <img
        class="header__logo"
        src="../assets/images/novanet-logo.svg"
        alt="Logo de novanet"
      />
    </div>
  </header>
</template>

<script>
import Trigram from '../components/menu/Trigram.vue'
import Sidebar from '../components/menu/Sidebar.vue'

export default {
  components: {
    Trigram,
    Sidebar,
  },
}

import '../layouts/Home.scss'
</script>
