<template>
  <footer class="footer">
    <div class="rrss">
      <a
        class="rrss__link rrss__link--triangle"
        href="https://www.facebook.com/NovanetStudio"
        target="_blank"
      >
        <font-awesome :icon="['fab', 'facebook-f']" />
      </a>
      <a
        class="rrss__link rrss__link--square"
        href="https://twitter.com/novanetstudio"
        target="_blank"
      >
        <font-awesome :icon="['fab', 'twitter']" />
      </a>
      <a
        class="rrss__link rrss__link--circle"
        href="https://www.instagram.com/novanetstudio/"
        target="_blank"
      >
        <font-awesome :icon="['fab', 'instagram']" />
      </a>

      <a href="https://wa.me/message/QA5DVPVFSXYCJ1" target="_blank">
        <font-awesome
          class="mensaje__icono whatsapp"
          :icon="[
            $static.inicio.edges[0].node.contacto.prefix,
            $static.inicio.edges[0].node.contacto.icono,
          ]"
          size="lg"
        />
      </a>
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
