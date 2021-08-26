<template>
  <header class="header" :class="bg">
    <nav class="navpage">
      <g-link class="navpage__link" to="/">
        <font-awesome :icon="['fa', 'caret-left']" />
      </g-link>
      <g-link class="navpage__link" to="/nosotros">
        <div :data-icon="icon" class="icon"></div>
        <h1>{{ vista }}</h1>
      </g-link>
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
import './Home.scss'
</script>
