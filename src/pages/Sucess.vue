<template>
  <Page>
    <Header
      icon="p"
      vista="¡Mensaje enviado!"
      bg="header--blue"
      tituloclase="nav__title"
    />
    <main class="main">
      <section class="section">
        <h2 class="blue">¡Gracias por contactarnos!</h2>
        <p>
          Te estarmos respondiendo lo más pronto posible. Juntos desarrollaremos
          las tácticas y acciones para posicionarte donde quieres estar.
        </p>
      </section>
      <section class="section">
        <div class="pago">
          <div>
            <g-image
              class="pago__logos"
              src="../assets/images/novanet-inicio-diseno.jpg"
              alt="Forma triangular del servicio de diseño gráfico"
              background="#ededed"
              blur="40"
              quality="100"
            />
          </div>
          <div>
            <g-image
              class="pago__logos"
              src="../assets/images/novanet-inicio-web.jpg"
              alt="Forma triangular del servicio de tecnologías web"
              background="#ededed"
              blur="40"
              quality="100"
            />
          </div>
          <div>
            <g-image
              class="pago__logos"
              src="../assets/images/novanet-inicio-asesoria.jpg"
              alt="Forma triangular del servicio de asesoría"
              background="#ededed"
              blur="40"
              quality="100"
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
}
</page-query>

<script>
import Header from '~/components/HeaderPage'

export default {
  metaInfo() {
    return {
      ...this.$ogp({
        title: 'Mensaje enviado',
        description:
          'Gracias por contactarnos. Te estaremos respondiendo lo más pronto posible.',
        image: this.$page.metadata.image,
      }),
    }
  },
  components: {
    Header,
  },
}

import './Pago.scss'
</script>
