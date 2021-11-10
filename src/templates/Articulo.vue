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
        <article class="article">
          <div class="article__image-share">
            <g-image
              class="article__image"
              :src="$page.articulos.imagen.url"
              :alt="$page.articulos.imagen.alternativeText"
            />
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
        </article>
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
      alternativeText
    }
  }
}
</page-query>

<script>
import Header from '~/components/HeaderPage'
import Share from '~/components/Share'
import VueMarkdown from '@adapttive/vue-markdown'

export default {
  metaInfo() {
    return {
      ...this.$ogp({
        title: this.$page.articulos.titulo,
        description: this.$page.articulos.descripcion.substring(0, 158),
        image: this.$page.articulos.imagen.url,
      }),
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
