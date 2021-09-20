<template>
  <Page>
    <Header icon="t" vista="Portafolio" bg="header--magenta" />
    <main class="main">
      <section class="section">
        <p>
          {{ $page.portafolio.edges[0].node.descripcion }}
        </p>
      </section>

      <section class="section">
        <div class="col">
          <g-link
            :to="`/portafolio/${categoria.node.slug}`"
            class="col--categories"
            v-for="categoria in $page.categorias.edges"
            :key="categoria.id"
          >
            <div
              :data-icon="categoria.node.icono"
              class="col__icon--categories icon"
            ></div>
            <h3 class="col__title">{{ categoria.node.nombre }}</h3>
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
