<template>
  <Page>
    <Header
      icon="t"
      :vista="`Portafolio / ${$page.categorias.nombre}`"
      bg="header--magenta"
      tituloclase="nav__link--title"
    />
    <main class="main">
      <section class="section">
        <div class="categories">
          <div class="categories__items">
            <div
              :data-icon="$page.categorias.icono"
              class="categories__icon icon"
            ></div>
            <h2 class="categories__title">{{ $page.categorias.nombre }}</h2>
          </div>
        </div>
        <p>{{ $page.categorias.descripcion }}</p>
      </section>
      <section class="section">
        <div class="categories categories__internal">
          <div
            v-for="proyecto in $page.categorias.proyectos"
            :key="proyecto.id"
          >
            <Card
              class="categories__items"
              view="portafolio"
              :imagen="proyecto.miniatura"
              :coleccion="$page.categorias.slug"
              :alias="proyecto"
            />
          </div>
        </div>
      </section>
    </main>
  </Page>
</template>

<page-query>
query Categoria($id: ID!) {
  categorias: strapiCategorias(id: $id)  {
    id
    nombre
    icono
    descripcion
    slug
    proyectos {
      id
      titulo
      miniatura {
        url
        alternativeText
      }
      descripcion
      slug
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
        title: this.$page.categorias.nombre,
        description: this.$page.categorias.descripcion.substring(0, 158),
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

import '../pages/Portafolio.scss'
</script>
