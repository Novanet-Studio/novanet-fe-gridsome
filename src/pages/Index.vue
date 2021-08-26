<template>
  <Home>
    <h1>{{ $page.inicio.edges[0].node.principal }}</h1>
    <p>
      {{ $page.inicio.edges[0].node.secundario }}
    </p>
    <font-awesome
      :icon="[
        $page.inicio.edges[0].node.contacto.prefix,
        $page.inicio.edges[0].node.contacto.icono,
      ]"
    />
    <p>{{ $page.inicio.edges[0].node.contacto.descripcion }}</p>
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
