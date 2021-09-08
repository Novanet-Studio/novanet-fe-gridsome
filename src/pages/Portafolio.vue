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
        <div class="col-3">
          <div
            class="col-3--categories"
            v-for="categoria in $page.categorias.edges"
            :key="categoria.id"
          >
            <div
              :data-icon="categoria.node.icono"
              class="col-3__icon--categories icon"
            ></div>
            <h3 class="col-3__title">{{ categoria.node.nombre }}</h3>
          </div>
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
