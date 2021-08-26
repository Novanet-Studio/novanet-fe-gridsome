<template>
  <header class="header">
    <nav class="nav">
      <g-link class="nav__link" to="/">
        <img
          class="footer__autor__logo"
          alt="Novanet logo"
          src="../assets/images/novanet-logo.svg"
        />
      </g-link>
      <g-link class="nav__link" to="/nosotros/">
        <div data-icon="f" class="icon"></div>
        Nosotros
      </g-link>
      <g-link class="nav__link" to="/">
        <div data-icon="m" class="icon"></div>
        Servicios
      </g-link>
      <g-link class="nav__link" to="/">
        <div data-icon="t" class="icon"></div>
        Portafolio
      </g-link>
      <g-link class="nav__link" to="/">
        <div data-icon="q" class="icon"></div>
        Blog
      </g-link>
      <g-link class="nav__link" to="/">
        <div data-icon="z" class="icon"></div>
        Contacto
      </g-link>
    </nav>
  </header>
</template>

<script lang="scss">
@import './Home.scss';
</script>
