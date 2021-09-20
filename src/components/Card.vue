<template>
  <div class="card">
    <g-link :to="`/${view}/${coleccion.slug}/${alias.slug}`">
      <g-image :src="imagen" />
      <h3>{{ alias.titulo }}</h3>
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
   view: String, 
   imagen: String,
   coleccion: Object,
   alias: Object,
  },
}
import '../layouts/Home.scss'
</script>
