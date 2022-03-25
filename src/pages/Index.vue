<template>
  <Home>
    <section class="section section--home">
      <h1 class="shapes__titulo">
        {{ $page.inicio.edges[0].node.principal }}
      </h1>
      <div class="shapes">
        <button
          class="shapes__item"
          v-for="servicio in $page.servicios.edges[0].node.servicios"
          :key="servicio.id"
          @click="
            showModal = true
            item = servicio.especialidad
            link = servicio.link
            title = servicio.titulo
          "
        >
          <g-image
            class="shapes__img"
            :src="servicio.imagen.url"
            width="290"
            :alt="servicio.imagen.alternativeText"
            background="#d6f630"
            blur="40"
            quality="100"
          />
          <h4 class="shapes__subtitulo">{{ servicio.titulo }}</h4>
        </button>
        <Modal
          v-if="showModal"
          @close="showModal = false"
          :title="title"
          :item="item"
          :link="link"
          clase="modal__index"
        />
      </div>
    </section>
  </Home>
</template>

<page-query>
query {
  metadata {
    image
  }
  inicio: allStrapiInicio {
    edges {
     node {
      principal
      secundario
      contacto {
        prefix
        icono
        descripcion
      }
    } 
    }
  }
  servicios: allStrapiServicios {
    edges {
      node {      
        servicios {  
          id
        	titulo
          link
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
import Modal from '~/components/Modal'

export default {
  metaInfo() {
    return {
      ...this.$ogp({
        title: 'Inicio',
        description: this.$page.inicio.edges[0].node.principal,
        image: this.$page.metadata.image,
      }),
    }
  },
  components: {
    Modal,
  },
  data: function () {
    return {
      showModal: false,
      title: null,
      item: null,
      link: null,
    }
  },
  computed: {
    console: () => console,
  },
}

import './Index.scss'
</script>
