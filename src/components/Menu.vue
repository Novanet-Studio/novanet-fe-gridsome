<template>
  <nav class="nav nav--main">
    <client-only>
      <Slide noOverlay width="180">
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
        <g-link class="nav__link" to="/contacto/">
          <div data-icon="z" class="nav__icon icon"></div>
          <p class="nav__title">Contacto</p>
        </g-link>
      </Slide>
    </client-only>
  </nav>
</template>

<script>
export default {
  components: {
    Slide: () =>
      import('vue-burger-menu')
        .then(m => m.Slide)
        .catch(),
  },
}

import '../layouts/Home.scss'
</script>
