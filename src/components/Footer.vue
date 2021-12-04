<template>
  <footer class="footer">
    <div class="rrss">
      <a
        class="rrss__link rrss__link--triangle"
        href="https://www.facebook.com/NovanetStudio"
        target="_blank"
        aria-label="Ir al Facebook de Novanet Studio"
        rel="noopener noreferrer"
      >
        <font-awesome :icon="['fab', 'facebook-f']" />
      </a>
      <a
        class="rrss__link rrss__link--square"
        href="https://twitter.com/novanetstudio"
        target="_blank"
        aria-label="Ir al twitter de Novanet Studio"
        rel="noopener noreferrer"
      >
        <font-awesome :icon="['fab', 'twitter']" />
      </a>
      <a
        class="rrss__link rrss__link--circle"
        href="https://www.instagram.com/novanetstudio/"
        target="_blank"
        aria-label="Ir al instagram de Novanet Studio"
        rel="noopener noreferrer"
      >
        <font-awesome :icon="['fab', 'instagram']" />
      </a>

      <a
        href="https://wa.me/message/QA5DVPVFSXYCJ1"
        target="_blank"
        aria-label="Ir al chat de whatsapp de Novanet Studio"
        rel="noopener noreferrer"
      >
        <font-awesome
          class="mensaje__icono whatsapp"
          :icon="[
            $static.inicio.edges[0].node.contacto.prefix,
            $static.inicio.edges[0].node.contacto.icono,
          ]"
        />
      </a>
      <p class="mensaje__titulo">
        {{ $static.inicio.edges[0].node.contacto.descripcion }} &nbsp; | &nbsp;
        Novanet Studio - {{ new Date().getFullYear() }}
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
