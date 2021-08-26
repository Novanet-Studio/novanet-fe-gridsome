<template>
  <Page>
    <Header icon="f" vista="Nosotros" bg="header__green" />
    <main class="main">
      <h1>{{ $page.nosotros.edges[0].node.principal.titulo }}</h1>
      <p>
        {{ $page.nosotros.edges[0].node.principal.descripcion }}
      </p>
      <h2 class="green">{{ $page.nosotros.edges[0].node.proposito.titulo }}</h2>
      <p>
        {{ $page.nosotros.edges[0].node.proposito.descripcion }}
      </p>
      <h2 class="green">{{ $page.nosotros.edges[0].node.objetivo.titulo }}</h2>
      <p>
        {{ $page.nosotros.edges[0].node.objetivo.descripcion }}
      </p>
      <h2 class="green">{{ $page.nosotros.edges[0].node.principal.titulo }}</h2>
      <p>
        {{ $page.nosotros.edges[0].node.principal.descripcion }}
      </p>
    </main>
  </Page>
</template>

<page-query>
query {
  nosotros: allStrapiNosotros {
    edges {
      node {
      principal {
        titulo
        descripcion
      }
      proposito {
        titulo
        descripcion
      }
      objetivo {
        titulo
        descripcion
      }
      trabaja {
        titulo
        descripcion
      }
      } 
    }
  }
}
</page-query>

<script>
import Header from '~/layouts/HeaderPage'

export default {
  components: {
    Header,
  },
}
</script>
