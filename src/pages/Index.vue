<template>
  <Home>
    <section class="section section--home">
      <h1 class="shapes__titulo">
        {{ $page.inicio.edges[0].node.principal }}
      </h1>
      <div class="shapes">
        <div class="shapes__item">
          <g-image
            class="shapes__img"
            src="~/assets/images/novanet-inicio-diseno.png"
            alt="Forma triangular del servicio de diseño gráfico"
          />
          <h4 class="shapes__subtitulo">Diseño gráfico</h4>
        </div>
        <div class="shapes__item">
          <g-image
            class="shapes__img"
            src="~/assets/images/novanet-inicio-web.png"
            alt="Forma triangular del servicio de tecnologías web"
          />
          <h4 class="shapes__subtitulo">Tecnologías web</h4>
        </div>
        <div class="shapes__item">
          <g-image
            class="shapes__img--circle"
            src="~/assets/images/novanet-inicio-asesoria.png"
            alt="Forma triangular del servicio de asesoría"
          />
          <h4 class="shapes__subtitulo">Asesoría</h4>
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
</script>
