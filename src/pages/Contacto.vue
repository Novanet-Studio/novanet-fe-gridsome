<template>
  <Page>
    <Header
      icon="z"
      vista="Contacto"
      bg="header--blue"
      tituloclase="nav__title"
    />
    <main class="main">
      <section class="section">
        <div class="contacto">
          <div class="contacto__items">
            <h2 class="blue">
              {{ $page.contacto.edges[0].node.principal.titulo }}
            </h2>
            <vue-markdown>{{
              $page.contacto.edges[0].node.principal.descripcion
            }}</vue-markdown>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d980.7857007733666!2d-66.87772169073442!3d10.489406951509675!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1952146d76df33c4!2sNovanet%20Studio!5e0!3m2!1ses!2sve!4v1632839029172!5m2!1ses!2sve"
              class="contacto__mapa"
              allowfullscreen="true"
              loading="lazy"
            ></iframe>
          </div>

          <div class="contacto__items">
            <h2 class="blue">
              {{ $page.contacto.edges[0].node.formulario.titulo }}
            </h2>
            <p>
              {{ $page.contacto.edges[0].node.formulario.descripcion }}
            </p>
            <form
              class="formulario"
              name="contacto"
              v-on:submit.prevent="handleSubmit"
              action="/gracias/"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <h3 class="formulario__titulo">Formulario de contacto</h3>

              <p hidden>
                <label> Don’t fill this out: <input name="bot-field" /> </label>
              </p>
              <div>
                <input
                  type="text"
                  name="nombre"
                  v-model="formData.nombre"
                  placeholder="Nombre y Apellido"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  v-model="formData.email"
                  placeholder="Email"
                />
              </div>

              <div>
                <input
                  type="number"
                  name="telefono"
                  v-model="formData.telefono"
                  placeholder="Teléfono"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="origen"
                  v-model="formData.origen"
                  placeholder="¿Cómo nos encontró?"
                />
              </div>

              <div>
                <textarea
                  name="mensaje"
                  v-model="formData.mensaje"
                  placeholder="Mensaje"
                />
              </div>
              <input type="submit" value="Enviar" />
              <input type="hidden" name="form-name" value="inicio" />
            </form>
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
  contacto: allStrapiContacto {
    edges {
      node {
        principal {
          titulo
          descripcion
        }
        formulario {
          titulo
          descripcion
        }
        latitud
        longitud
      }
    }
  }
}
</page-query>

<script>
import Header from '~/components/HeaderPage'
import VueMarkdown from '@adapttive/vue-markdown'

export default {
  metaInfo() {
    return {
      ...this.$ogp({
        title: 'Contacto',
        description: this.$page.contacto.edges[0].node.principal.descripcion.substring(
          0,
          168,
        ),
        image: this.$page.metadata.image,
      }),
    }
  },
  components: {
    Header,
    VueMarkdown,
  },
  data() {
    return {
      markers: [],
      formData: {},
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]),
        )
        .join('&')
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
        .then(() => this.$router.push('/success'))
        .catch(error => alert(error))
    },
    getMarkers: function(latArg, lngArg) {
      let markers = []
      let lat = parseFloat(latArg)
      let lng = parseFloat(lngArg)
      markers.push({ position: { lat, lng } })
      return markers
    },
  },
  computed: {
    console: () => console,
  },
}

import './Contacto.scss'
</script>
