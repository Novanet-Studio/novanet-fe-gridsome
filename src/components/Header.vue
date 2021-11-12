<template>
  <header class="header">
    <nav class="nav--main">
      <client-only>
        <Slide noOverlay width="220">
          <g-link class="nav__link" to="/">
            <img
              class="nav__link--logo"
              src="../assets/images/novanet-logo.svg"
              alt="Logo de novanet"
            />
          </g-link>
          <g-link class="nav__link nav__link--view" to="/nosotros/">
            <div data-icon="f" class="nav__link--icon icon"></div>
            <p class="nav__link--title">Nosotros</p>
          </g-link>
          <g-link class="nav__link nav__link--view" to="/servicios/">
            <div data-icon="m" class="nav__link--icon icon"></div>
            <p class="nav__link--title">Servicios</p>
          </g-link>
          <g-link class="nav__link nav__link--view" to="/portafolio/">
            <div data-icon="t" class="nav__link--icon icon"></div>
            <p class="nav__link--title">Portafolio</p>
          </g-link>
          <g-link class="nav__link nav__link--view" to="/blog/">
            <div data-icon="q" class="nav__link--icon icon"></div>
            <p class="nav__link--title">Blog</p>
          </g-link>
          <g-link class="nav__link nav__link--view" to="/contacto/">
            <div data-icon="z" class="nav__link--icon icon"></div>
            <p class="nav__link--title">Contacto</p>
          </g-link>
          <p class="nav__legal">
            Novanet Studio<br />Derechos reservados
            {{ new Date().getFullYear() }}
          </p>
        </Slide>
      </client-only>
    </nav>
  </header>
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
