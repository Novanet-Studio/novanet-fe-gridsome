<template>
  <header class="header header--page" :class="bg">
    <nav class="nav--page">
      <button class="nav__link" @click="$router.go(-1)">
        <font-awesome :icon="['fa', 'caret-left']" size="lg" />
      </button>
      <div class="nav__link">
        <div
          :data-icon="icon"
          class="nav__link--icon nav__link--icon-page icon"
        ></div>
        <h1 :class="tituloclase">{{ vista }}</h1>
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
    tituloclase: String,
  },
}
import '../layouts/Home.scss'
</script>
