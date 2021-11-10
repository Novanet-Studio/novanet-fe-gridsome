<template>
  <Home>
    <section class="section--home">
      <div class="shapes">
        <div class="shapes__item">
          <g-image
            class="shapes__img"
            src="~/assets/images/novanet-inicio-diseno.png"
            alt="Forma triangular del servicio de diseño gráfico"
          />
          <h4>Diseño gráfico</h4>
        </div>
        <div class="shapes__item">
          <g-image
            class="shapes__img"
            src="~/assets/images/novanet-inicio-web.png"
            alt="Forma triangular del servicio de tecnologías web"
          />
          <h4>Tecnologías web</h4>
        </div>
        <div class="shapes__item">
          <g-image
            class="shapes__img--circle"
            src="~/assets/images/novanet-inicio-asesoria.png"
            alt="Forma triangular del servicio de asesoría"
          />
          <h4>Asesoría</h4>
        </div>
        <h1 class="shapes__titulo">
          {{ $page.inicio.edges[0].node.principal }}
        </h1>
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
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      meta: [
        { key: 'title', name: 'title', content: 'Inicio' },
        {
          key: 'description',
          name: 'description',
          content: this.$page.inicio.edges[0].node.principal,
        },
        { key: 'image', name: 'image', content: this.$page.metadata.image },
      ],
    }
  },
  computed: {
    console: () => console,
  },
}
</script>
