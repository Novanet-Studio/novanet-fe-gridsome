<template>
  <Home>
    <h1>{{ $page.inicio.edges[0].node.principal }}</h1>
    <ul class="shapes">
      <li class="shapes__item">
        <g-image class="shapes__img" src="~/assets/images/novanet-inicio-diseno.png" />
        <h4>Diseño gráfico</h4>
      </li>
      <li class="shapes__item">
        <g-image class="shapes__img" src="~/assets/images/novanet-inicio-web.png" />
        <h4>Tecnologías web</h4>
      </li>
      <li class="shapes__item">
        <g-image class="shapes__img--circle" src="~/assets/images/novanet-inicio-asesoria.png" />
        <h4>Asesoría</h4>
      </li>
    </ul>
    <section class="section">
      <p>
        {{ $page.inicio.edges[0].node.secundario }}
      </p>
    </section>
    <section class="section--contacto">
      <font-awesome
        class="whatsapp"
        :icon="[
          $page.inicio.edges[0].node.contacto.prefix,
          $page.inicio.edges[0].node.contacto.icono,
        ]"
        size="2x"
      />
      <p>{{ $page.inicio.edges[0].node.contacto.descripcion }}</p>
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
