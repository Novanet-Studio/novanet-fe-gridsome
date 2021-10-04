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
  components: {
    Header,
  },
  computed: {
    console: () => console,
  },
}
</script>
