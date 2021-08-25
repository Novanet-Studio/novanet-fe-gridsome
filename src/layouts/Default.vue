<template>
  <div class="layout">
    <div class="container">
      <Header />
      <main class="main">
        <slot />
      </main>
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
import Header from '~/layouts/Header'
import Footer from '~/layouts/Footer'

export default {
  components: {
    Header,
    Footer,
  },
}
import './Default.scss'
</script>
