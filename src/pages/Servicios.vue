<template>
  <Page>
    <Header
      icon="m"
      vista="Servicios"
      bg="header--blue"
      tituloclase="nav__title"
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
        <div class="services__heading">
          <g-image
            class="services__heading-image"
            :src="servicio.imagen.url"
            :alt="servicio.imagen.alternativeText"
            blur="40"
            quality="100"
          />
          <div class="services__heading-info">
            <h2 :id="servicio.id">{{ servicio.titulo }}</h2>
            <p>{{ servicio.descripcion }}</p>
          </div>
        </div>

        <vue-tabs class="services">
          <div
            class="services__items"
            v-for="item in servicio.especialidad"
            :key="item.id"
          >
            <v-tab class="services__title" :title="item.titulo">
              <div :data-icon="item.icono" class="services__icon icon"></div>
              <p class="services__description">{{ item.descripcion }}</p>
            </v-tab>
          </div>
        </vue-tabs>

        <!-- <vue-tabs v-for="item in servicio.especialidad" :key="item.id">
          <v-tab :title="item.titulo"> {{ item.descripcion }} </v-tab>
        </vue-tabs> -->

        <!-- <div class="services">
          <div
            class="services__items"
            v-for="item in servicio.especialidad"
            :key="item.id"
          >
            <div :data-icon="item.icono" class="services__icon icon"></div>
            <h3 class="services__title">{{ item.titulo }}</h3>
          </div>
        </div> -->
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
          imagen  {
            url 
            alternativeText
          }
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
import { VueTabs, VTab } from 'vue-nav-tabs'
import VueMarkdown from '@adapttive/vue-markdown'
import 'vue-nav-tabs/themes/vue-tabs.css'

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
    VueTabs,
    VTab,
  },
  data: function () {
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
