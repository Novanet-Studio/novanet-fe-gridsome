<template>
  <Home>
    <section class="section section--home">
      <h1 class="shapes__titulo">
        {{ $page.inicio.edges[0].node.principal }}
      </h1>
      <div class="shapes">
        <div class="shapes__item">
          <g-link
            :to="`/servicios#${$page.servicios.edges[0].node.servicios[0].id}`"
          >
            <g-image
              class="shapes__img"
              src="~/assets/images/novanet-inicio-diseno.jpg"
              width="290"
              alt="Forma triangular del servicio de diseño gráfico"
              background="#d6f630"
              blur="40"
              quality="100"
            />
          </g-link>
          <h4 class="shapes__subtitulo">Diseño gráfico</h4>
        </div>
        <div class="shapes__item">
          <g-link :to="`/servicios#${$page.servicios.edges[0].node.servicios[1].id}`">
            <g-image
              class="shapes__img"
              src="~/assets/images/novanet-inicio-web.jpg"
              width="290"
              alt="Forma triangular del servicio de tecnologías web"
              background="#099bc3"
              blur="40"
              quality="100"
            />
          </g-link>
          <h4 class="shapes__subtitulo">Tecnologías web</h4>
        </div>
        <div class="shapes__item">
          <g-link :to="`/servicios#${$page.servicios.edges[0].node.servicios[2].id}`">
            <g-image
              class="shapes__img--circle"
              src="~/assets/images/novanet-inicio-asesoria.jpg"
              width="290"
              alt="Forma triangular del servicio de asesoría"
              background="#df1f5b"
              blur="40"
              quality="100"
            />
          </g-link>
          <h4 class="shapes__subtitulo shapes__subtitulo--circle">Asesoría</h4>
        </div>
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
        }
      }
    }
  }
}
</page-query>

<script>
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
  computed: {
    console: () => console,
  },
}

import './Inicio.scss'
</script>
