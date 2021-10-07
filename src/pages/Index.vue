<template>
  <Home>
    <section class="section--home">
      <div class="shapes">
        <div class="shapes__item">
          <g-image
            class="shapes__img"
            src="~/assets/images/novanet-inicio-diseno.png"
          />
          <h4>Diseño gráfico</h4>
        </div>
        <div class="shapes__item">
          <g-image
            class="shapes__img"
            src="~/assets/images/novanet-inicio-web.png"
          />
          <h4>Tecnologías web</h4>
        </div>
        <div class="shapes__item">
          <g-image
            class="shapes__img--circle"
            src="~/assets/images/novanet-inicio-asesoria.png"
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
  metaInfo: {
    title: 'Hello, world!',
  },
  computed: {
    console: () => console,
  },
}
</script>
