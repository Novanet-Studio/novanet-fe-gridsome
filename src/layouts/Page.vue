<template>
  <div class="layout">
    <div class="container">
      <slot />
      <Footer />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Footer from '~/layouts/Footer'

export default {
  components: {
    Footer,
  },
}
import './Home.scss'
</script>
