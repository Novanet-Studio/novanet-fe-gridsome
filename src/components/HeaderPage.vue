<template>
  <header class="header" :class="bg">
    <nav class="nav--page">
      <g-link class="nav__link" to="/">
        <font-awesome :icon="['fa', 'caret-left']" size="lg" />
      </g-link>
      <div class="nav__link">
        <div
          :data-icon="icon"
          class="nav__link--icon nav__link--icon-page icon"
        ></div>
        <h1 class="nav__link--title">{{ vista }}</h1>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    vista: String,
    icon: String,
    bg: String,
  },
}
import '../layouts/Home.scss'
</script>
