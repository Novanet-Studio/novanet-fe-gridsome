<template>
  <div class="card">
    <g-link :to="`/${view}/${coleccion}/${alias.slug}`">
      <g-image
        class="card__image"
        :src="imagen.url"
        :alt="imagen.alternativeText"
        background="#ededed"
        blur="40"	
      />
      <div class="card__info">
        <time class="date" v-if="alias.createdAt">{{
          convertDate(alias.createdAt)
        }}</time>
        <h3 class="card__title">{{ alias.titulo }}</h3>
        <p class="card__description" v-if="descripcion">
          {{ maxWords(descripcion) + '...' }}
        </p>
      </div>
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    view: String,
    imagen: Object,
    coleccion: String,
    descripcion: String,
    alias: Object,
  },
  methods: {
    convertDate: function(date) {
      let newDate = new Date(date)
      newDate = newDate.toLocaleDateString('es-ES')
      return newDate
    },
    maxWords: function(str) {
      // String as an argument for a function
      let description = str
      // Number of allowed characters
      const maxLength = 120

      //trim the string to the maximum length
      let trimmedDescription = description.substring(0, maxLength)

      //re-trim if we are in the middle of a word
      trimmedDescription = trimmedDescription.substring(
        0,
        Math.min(
          trimmedDescription.length,
          trimmedDescription.lastIndexOf(' '),
        ),
      )

      return trimmedDescription
    },
  },
}
import './Card.scss'
</script>
