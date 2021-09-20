<template>
  <Page>
    <Header
      icon="t"
      :vista="
        `Portafolio / ${$page.proyectos.categorias.nombre} / ${
          $page.proyectos.titulo
        }`
      "
      bg="header--magenta"
    />
    <main class="main">
      <section class="section">
        <div>
          <div>
            <h1>{{ $page.proyectos.titulo }}</h1>
            <p>{{ $page.proyectos.descripcion }}</p>
            <g-image :src="$page.proyectos.miniatura.url" />
            <div v-for="imagen in $page.proyectos.imagenes" :key="imagen.id">
              <g-image :src="imagen.url" />
            </div>

            <Share
              :url="currentUrl"
              :titulo="$page.proyectos.titulo"
              :descripcion="$page.proyectos.descripcion"
              :imagen="$page.proyectos.miniatura.url"
            />

            {{ console.log(currentUrl) }}
          </div>
        </div>
      </section>
    </main>
  </Page>
</template>

<page-query>
query Proyectos($id: ID!) {
  proyectos: strapiProyectos(id: $id)  {
    id   
    Ano
    ciudad
    titulo
    descripcion
    slug
    miniatura {
      url
    }
    imagenes {
      id
      url
    }
    categorias {
      nombre
    }
  }
}
</page-query>

<script>
import Header from '~/components/HeaderPage'
import Share from '~/components/Share'

export default {
  components: {
    Header,
    Share,
  },
  data: function() {
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
