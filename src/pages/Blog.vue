<template>
  <Page>
    <Header icon="t" vista="Blog" bg="header--green" />
    <main class="main">
      <section class="section">
        <p>
          {{ $page.blog.edges[0].node.descripcion }}
        </p>
      </section>

      <section class="section">
        <div v-for="index in 1" :key="index">
          <Card
            view="blog"
            :imagen="$page.articuloDestacado.edges[0].node.imagen.url"
            :coleccion="$page.articuloDestacado.edges[0].node.tag"
            :alias="$page.articuloDestacado.edges[0].node"
            :descripcion="$page.articuloDestacado.edges[0].node.descripcion"
          />
        </div>
      </section>

      <section class="section col">
        <div v-for="articulo in $page.articulos.edges" :key="articulo.id">
          <Card
            view="blog"
            :imagen="articulo.node.imagen.url"
            :coleccion="articulo.node.tag"
            :alias="articulo.node"
          />
        </div>
      </section>
    </main>
  </Page>
</template>

<page-query>
  query {
    blog: allStrapiBlog {
      edges {
        node {
          descripcion       
        }
      }
    }
    articulos: allStrapiArticulos {
      edges {
        node {
          id
          titulo
          descripcion
          tag
          slug
          createdAt
          imagen {
            url
          }
        }
      }
    }
    articuloDestacado: allStrapiArticulos(filter: { destacado: { eq: true }})  {
      edges {
        node {
          id
          titulo
          descripcion
          tag
          slug
          destacado
          createdAt
          imagen {
            url
          }
        }
      }
    }
  }
</page-query>

<script>
import Header from '~/components/HeaderPage'
import Card from '~/components/Card'

export default {
  components: {
    Header,
    Card,
  },
  computed: {
    console: () => console,
  },
}
</script>
