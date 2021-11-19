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
          <button         
            class="services__items"
            v-for="item in servicio.especialidad"
            :key="item.id"
            @click="
              showModal = true
              content = item
            "
          >
            <div :data-icon="item.icono" class="services__icon icon"></div>
            <h3 class="services__title">{{ item.titulo }}</h3>
          </button>
          <Modal v-if="showModal" @close="showModal = false" :content="content" :clase=$magenta />
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
import Modal from '~/components/Modal'
import VueMarkdown from '@adapttive/vue-markdown'

export default {
  metaInfo() {
    return {
      ...this.$ogp({
        title: 'Servicios',
        description: this.$page.servicios.edges[0].node.descripcion.substring(
          0,
          168,
        ),
        image: this.$page.metadata.image,
      }),
    }
  },
  components: {
    Header,
    VueMarkdown,
    Modal,
  },
  data: function() {
    return {
      showModal: false,
      content: null,
    }
  },
  computed: {
    console: () => console,
  },
}

import './Servicios.scss'
</script>
