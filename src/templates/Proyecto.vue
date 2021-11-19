<template>
  <Page>
    <Header
      icon="t"
      :vista="`Portafolio / ${$page.proyectos.categorias.nombre}`"
      bg="header--magenta"
      tituloclase="nav__link--title"
    />
    <main class="main">
      <section class="section">
        <div class="project">
          <g-image
            class="project__image"
            :src="$page.proyectos.miniatura.url"
            :alt="$page.proyectos.miniatura.alternativeText"
          />
          <div class="project__info">
            <time class="date">{{ $page.proyectos.Ano }}</time>
            <h1>{{ $page.proyectos.titulo }}</h1>
            <p>{{ $page.proyectos.descripcion }}</p>
            <ul class="project__gallery">
              <li v-for="imagen in $page.proyectos.imagenes" :key="imagen.id">
                <button
                  @click="
                    showModal = true
                    content = imagen
                  "
                  class="project__button"
                >
                  <g-image
                    class="project__thumbnail"
                    :src="imagen.url"
                    :alt="imagen.alternativeText"
                  />
                </button>
                <Modal
                  v-if="showModal"
                  @close="showModal = false"
                  :image="content"
                />
              </li>
            </ul>
          </div>

          <Share
            :url="currentUrl"
            :titulo="$page.proyectos.titulo"
            :descripcion="$page.proyectos.descripcion"
            :imagen="$page.proyectos.miniatura.url"
          />
          {{ console.log(currentUrl) }}
        </div>
      </section>
    </main>
  </Page>
</template>

<page-query>
query Proyectos($id: ID!) {
  proyectos: strapiProyectos(id: $id)  {
    id   
    Ano
    ciudad
    titulo
    descripcion
    slug
    miniatura {
      url
      alternativeText
    }
    imagenes {
      id
      url
      alternativeText
    }
    categorias {
      nombre
    }
  }
}
</page-query>

<script>
import Header from '~/components/HeaderPage'
import Share from '~/components/Share'
import Modal from '~/components/Modal'

export default {
  metaInfo() {
    return {
      ...this.$ogp({
        title: this.$page.proyectos.titulo,
        description: this.$page.proyectos.descripcion.substring(0, 168),
        image: this.$page.proyectos.miniatura.url,
      }),
    }
  },
  components: {
    Header,
    Share,
    Modal,
  },
  data: function() {
    return {
      showModal: false,
      content: null,
      currentOrigin: '',
      currentPath: '',
      currentUrl: '',
    }
  },
  created() {
    if (process.isClient) {
      this.currentOrigin = window.location.origin
      this.currentPath = this.$route.fullPath
      this.currentUrl = this.currentOrigin + this.currentPath
    }
  },
  computed: {
    console: () => console,
  },
}

import './Proyecto.scss'
</script>
