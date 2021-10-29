<template>
  <Page>
    <Header
      icon="u"
      vista="Vista de Pago"
      bg="header--blue"
      tituloclase="nav__link--title-pago"
    />
    <main class="main">
      <section class="section">
        <h2 class="blue">Pagos online</h2>
        <p>
          Te ofrecemos diversos métodos de pago para que puedas vender online. Estas son las plataformas que podemos integrar a tu sitio web.
        </p>
      </section>
      <section class="section">
        <div class="pago">
          <div class="pago__app"><img class="pago__logos" src="../assets/images/nn-pago-paypal.svg" alt=""></div>
          <div class="pago__app"><img class="pago__logos" src="../assets/images/nn-pago-amazonpay.svg" alt=""></div>
          <div class="pago__app"><img class="pago__logos" src="../assets/images/nn-pago-square.svg" alt=""></div>
          <div class="pago__app"><img class="pago__logos" src="../assets/images/nn-pago-stripe.svg" alt=""></div>
        </div>
      </section>
    </main>
  </Page>
</template>
<script>
import Header from '~/components/HeaderPage'

export default {
  components: {
    Header,
  },
}
</script>
