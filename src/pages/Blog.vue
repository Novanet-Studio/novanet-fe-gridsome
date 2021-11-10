<template>
  <Page>
    <Header
      icon="q"
      vista="Blog"
      bg="header--green"
      tituloclase="nav__link--title"
    />
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
      meta: [
        { key: 'title', name: 'title', content: 'Blog' },
        {
          key: 'description',
          name: 'description',
          content: this.$page.blog.edges[0].node.descripcion.substring(0, 168),
        },
        { key: 'image', name: 'image', content: this.$page.metadata.image },
      ],
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
</script>
