<template>
  <Page>
    <Header
      icon="q"
      :vista="`Blog / ${$page.articulos.tag}`"
      bg="header--green"
      tituloclase="nav__link--title"
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
  metaInfo () {
    return {
      meta: [
        { key: 'title', name: 'title', content: this.$page.articulos.titulo },
        { key: 'description', name: 'description', content: this.$page.articulos.descripcion.substring(0, 158)},
        { key: 'image', name: 'image', content: this.$page.articulos.imagen.url},
      ]
    }
  },
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
