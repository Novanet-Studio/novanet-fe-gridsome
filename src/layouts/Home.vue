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
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components: {
    Header,
    Footer,
  },
}
import './Home.scss'
</script>
