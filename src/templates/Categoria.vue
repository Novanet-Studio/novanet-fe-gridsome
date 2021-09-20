<template>
  <Page>
    <Header
      icon="t"
      :vista="`Portafolio / ${$page.categorias.nombre}`"
      bg="header--magenta"
    />
    <main class="main">
      <section class="section">
        <div class="col">
          <div class="col--categories">
            <div
              :data-icon="$page.categorias.icono"
              class="col__icon--categories icon"
            ></div>
            <h2 class="col__title">{{ $page.categorias.nombre }}</h2>
          </div>
        </div>
        <p>{{ $page.categorias.descripcion }}</p>
      </section>
      <section class="section">
        <div v-for="proyecto in $page.categorias.proyectos" :key="proyecto.id">
          <Card
            view="portafolio"
            :imagen="proyecto.miniatura.url"
            :coleccion="$page.categorias"
            :alias="proyecto"
          />
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
  components: {
    Header,
    Card,
  },
  computed: {
    console: () => console,
  },
}
</script>
