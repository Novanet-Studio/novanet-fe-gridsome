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
    author
    twitter {
      site
      creator
    }
  }
}
</static-query>

<script>
import Footer from '~/components/Footer'

export default {
  metaInfo() {
    return {
      meta: [
        {
          key: 'author',
          name: 'author',
          content: this.$static.metadata.author,
        },
        {
          key: 'twitter:site',
          name: 'twitter:site',
          content: this.$static.metadata.twitter.site,
        },
        {
          key: 'twitter:creator',
          name: 'twitter:creator',
          content: this.$static.metadata.twitter.creator,
        },
      ],
    }
  },
  components: {
    Footer,
  },
}
import './Home.scss'
</script>
