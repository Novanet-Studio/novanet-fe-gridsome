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
        <div class="blog">
          <div v-for="articulo in $page.articulos.edges" :key="articulo.id">
            <Card
              class="blog__articulos"
              view="blog"
              :imagen="articulo.node.imagen.url"
              :coleccion="articulo.node.tag"
              :alias="articulo.node"
              :descripcion="articulo.node.descripcion"
            />
          </div>
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
