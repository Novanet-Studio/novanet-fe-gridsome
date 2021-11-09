<template>
  <Page>
    <Header
      icon="m"
      vista="Servicios"
      bg="header--blue"
      tituloclase="nav__link--title"
    />
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
        <div class="services">
          <div
            class="services__items"
            v-for="item in servicio.especialidad"
            :key="item.id"
          >
            <div :data-icon="item.icono" class="services__icon icon"></div>
            <h3>{{ item.titulo }}</h3>
            <vue-markdown class="services__description">{{
              item.descripcion
            }}</vue-markdown>
          </div>
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
import VueMarkdown from '@adapttive/vue-markdown'

export default {
  metaInfo () {
    return {
      meta: [
        { key: 'title', name: 'title', content: 'Servcios' },
        { key: 'description', name: 'description', content: this.$page.servicios.edges[0].node.descripcion.substring(0, 168)},
        { key: 'image', name: 'image', content: this.$page.metadata.image },

      ]
    }
  },
  components: {
    Header,
    VueMarkdown,
  },
  computed: {
    console: () => console,
  },
}
</script>
