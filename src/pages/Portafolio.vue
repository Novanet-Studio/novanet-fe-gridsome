<template>
  <Page>
    <Header
      icon="t"
      vista="Portafolio"
      bg="header--magenta"
      tituloclase="nav__link--title"
    />
    <main class="main">
      <section class="section">
        <p>
          {{ $page.portafolio.edges[0].node.descripcion }}
        </p>
      </section>

      <section class="section">
        <div class="categories">
          <g-link
            :to="`/portafolio/${categoria.node.slug}`"
            class="categories__items"
            v-for="categoria in $page.categorias.edges"
            :key="categoria.id"
          >
            <div
              :data-icon="categoria.node.icono"
              class="categories__icon icon"
            ></div>
            <h3 class="categories__title">{{ categoria.node.nombre }}</h3>
          </g-link>
        </div>
      </section>
    </main>
  </Page>
</template>

<page-query>
query {
  metadata {
    image
  }
  portafolio: allStrapiPortafolio {
    edges {
      node {
        descripcion       
      }
    }
  }
  categorias: allStrapiCategorias {
    edges {
      node {
        id
        icono
        nombre
        slug
      }
    }
  }
}
</page-query>

<script>
import Header from '~/components/HeaderPage'

export default {
  metaInfo () {
    return {
      meta: [
        { key: 'title', name: 'title', content: 'Portafolio' },
        { key: 'description', name: 'description', content: this.$page.portafolio.edges[0].node.descripcion.substring(0, 168)},
        { key: 'image', name: 'image', content: this.$page.metadata.image },
      ]
    }
  },
  components: {
    Header,
  },
  computed: {
    console: () => console,
  },
}
</script>
