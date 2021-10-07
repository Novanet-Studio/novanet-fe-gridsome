<template>
  <header class="header">
    <nav class="nav--main">
      <g-link class="nav__link" to="/">
        <img
          class="nav__link--logo"
          alt="Novanet logo"
          src="../assets/images/novanet-logo.svg"
        />
      </g-link>
      <g-link class="nav__link nav__link--mobile" to="/nosotros/">
        <div data-icon="f" class="nav__link--icon icon"></div>
        <h4 class="nav__link--title">Nosotros</h4>
      </g-link>
      <g-link class="nav__link nav__link--mobile" to="/servicios/">
        <div data-icon="m" class="nav__link--icon icon"></div>
        <h4 class="nav__link--title">Servicios</h4>
      </g-link>
      <g-link class="nav__link nav__link--mobile" to="/portafolio/">
        <div data-icon="t" class="nav__link--icon icon"></div>
        <h4 class="nav__link--title">Portafolio</h4>
      </g-link>
      <g-link class="nav__link nav__link--mobile" to="/blog/">
        <div data-icon="q" class="nav__link--icon icon"></div>
        <h4 class="nav__link--title">Blog</h4>
      </g-link>
      <g-link class="nav__link nav__link--mobile" to="/contacto/">
        <div data-icon="z" class="nav__link--icon icon"></div>
        <h4 class="nav__link--title-contacto">Contacto</h4>
      </g-link>
    </nav>
  </header>
</template>

<script lang="scss">
@import '../layouts/Home.scss'
</script>
