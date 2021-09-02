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
        {{ console.log($page.portafolio.edges[0].node.categorias) }}
        <div class="col-3">
          <div
            class="col-3--categories"
            v-for="categoria in $page.portafolio.edges[0].node.categorias"
            :key="categoria.id"
          >
            <div :data-icon="categoria.icono" class="col-3__icon--categories icon"></div>
            <h3 class="col-3__title">{{ categoria.titulo }}</h3>
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
        categorias {
          id
          titulo
          icono
          descripcion
        }
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
