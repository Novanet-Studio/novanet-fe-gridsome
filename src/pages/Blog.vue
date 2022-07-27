<template>
  <Page>
    <Header icon="q" vista="Blog" bg="header--green" tituloclase="nav__title" />
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
              :imagen="articulo.node.imagen"
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
    metadata {
      image
    }
    blog: allStrapiBlog {
      edges {
        node {
          descripcion       
        }
      }
    }
    articulos: allStrapiArticulos(order: DESC) {
      edges {
        node {
          id
          titulo
          descripcion
          tag
          slug
          fecha
          imagen {
            url
            alternativeText
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
  metaInfo() {
    return {
      ...this.$ogp({
        title: 'Blog',
        description: this.$page.blog.edges[0].node.descripcion.substring(
          0,
          168,
        ),
        image: this.$page.metadata.image,
      }),
    }
  },
  components: {
    Header,
    Card,
  },
  computed: {
    console: () => console,
  },
}

import './Blog.scss'
</script>
