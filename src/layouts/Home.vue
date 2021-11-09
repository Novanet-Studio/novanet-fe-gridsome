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
    siteDescription
    siteUrl
    author
    image
    title
    twitter {
      site
      creator
    }
  }
}
</static-query>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  metaInfo () {
    return {
      meta: [
        { key: 'title', name: 'title', content: this.$static.metadata.title },
        { key: 'description', name: 'description', content: this.$static.metadata.image},
        { key: 'image', name: 'image', content: this.$static.metadata.image},
        { key: 'twitter:site', name: 'twitter:site', content: this.$static.metadata.twitter.site },
        { key: 'twitter:creator', name: 'twitter:creator', content: this.$static.metadata.twitter.creator }
      ]
    }
  },
  components: {
    Header,
    Footer,
  },
}
import './Home.scss'
</script>
