<template>
  <Page>
    <Header
      icon="t"
      :vista="`Blog / ${$page.articulos.tag}`"
      bg="header--green"
    />
    <main class="main">
      <section class="section">
        <div class="article">
          <div class="article__image-share">
            <g-image class="article__image" :src="$page.articulos.imagen.url" />
            <Share
              class="article__share"
              :url="currentUrl"
              :titulo="$page.articulos.titulo"
              :descripcion="$page.articulos.descripcion"
              :imagen="$page.articulos.imagen.url"
            />
          </div>
          <div class="article__info">
            <h1 class="article__title">{{ $page.articulos.titulo }}</h1>
            <vue-markdown class="article__description">{{
              $page.articulos.descripcion
            }}</vue-markdown>
          </div>
        </div>
      </section>
    </main>
  </Page>
</template>

<page-query>
query Proyectos($id: ID!) {
  articulos: strapiArticulos(id: $id)  {
    id
    titulo
    descripcion
    tag
    createdAt
    imagen {
      url
    }
  }
}
</page-query>

<script>
import Header from '~/components/HeaderPage'
import Share from '~/components/Share'
import VueMarkdown from '@adapttive/vue-markdown'

export default {
  components: {
    Header,
    Share,
    VueMarkdown,
  },
  data() {
    return {
      currentOrigin: '',
      currentPath: '',
      currentUrl: '',
    }
  },
  created() {
    if (process.isClient) {
      this.currentOrigin = window.location.origin
      this.currentPath = this.$route.fullPath
      this.currentUrl = this.currentOrigin + this.currentPath
    }
  },
  computed: {
    console: () => console,
  },
}
</script>
