<template>
  <Page>
    <Header
      icon="f"
      vista="Nosotros"
      bg="header--green"
      tituloclase="nav__link--title"
    />
    <main class="main">
      <section class="section">
        <h2>{{ $page.nosotros.edges[0].node.principal.titulo }}</h2>
        <p>
          {{ $page.nosotros.edges[0].node.principal.descripcion }}
        </p>
      </section>
      <section class="section">
        <h2 class="green">
          {{ $page.nosotros.edges[0].node.proposito.titulo }}
        </h2>
        <p>
          {{ $page.nosotros.edges[0].node.proposito.descripcion }}
        </p>
      </section>
      <section class="section">
        <h2 class="green">
          {{ $page.nosotros.edges[0].node.objetivo.titulo }}
        </h2>
        <p>
          {{ $page.nosotros.edges[0].node.objetivo.descripcion }}
        </p>
      </section>
      <section class="section">
        <h2 class="green">{{ $page.nosotros.edges[0].node.trabaja.titulo }}</h2>
        <p>
          {{ $page.nosotros.edges[0].node.trabaja.descripcion }}
        </p>
      </section>
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
import Header from '~/components/HeaderPage'

export default {
  components: {
    Header,
  },
}
</script>
