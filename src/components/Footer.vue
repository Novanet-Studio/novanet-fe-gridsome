<template>
  <footer class="footer">
    <div class="rrss">
      <a class="rrss__link rrss__link--triangle" to="/">
        <font-awesome :icon="['fab', 'facebook-f']" />
      </a>
      <a class="rrss__link rrss__link--square" to="/">
        <font-awesome :icon="['fab', 'twitter']" />
      </a>
      <a class="rrss__link rrss__link--circle" to="/">
        <font-awesome :icon="['fab', 'instagram']" />
      </a>

      <font-awesome
        class="mensaje__icono whatsapp"
        :icon="[
          $static.inicio.edges[0].node.contacto.prefix,
          $static.inicio.edges[0].node.contacto.icono,
        ]"
        size="lg"
      />
      <p class="mensaje__titulo">
        {{ $static.inicio.edges[0].node.contacto.descripcion }}
      </p>
    </div>
  </footer>
</template>

<static-query>
query {
  inicio: allStrapiInicio {
    edges {
     node {    
      contacto {
        prefix
        icono
        descripcion
      }
    } 
    }
  }
}
</static-query>

<script lang="scss">
@import '../layouts/Home.scss'
</script>
