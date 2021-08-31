<template>
  <Page>
    <Header icon="l" vista="Servicios" bg="header--blue" />
    <main class="main">
      <section class="section">
        <p>
          {{ $page.servicios.edges[0].node.descripcion }}
        </p>
      </section>

      <section
        class="section"
        v-for="servicio in $page.servicios.edges[0].node.servicios"
        :key="servicio.id"
      >
        <h2 class="blue">{{ servicio.titulo }}</h2>
        <p>{{ servicio.descripcion }}</p>

        <div v-for="item in servicio.especialidad" :key="item.id">
          <div :data-icon="item.icono" class="icon"></div>
          <h3>{{ item.titulo }}</h3>
          <p>{{ item.descripcion }}</p>
        </div>
      </section>
    </main>
  </Page>
</template>

<page-query>
query {
  servicios: allStrapiServicios {
    edges {
      node {
        descripcion
        servicios {
          id
        	titulo
          descripcion
          especialidad {
            id
            titulo
            icono
            descripcion
          }
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
