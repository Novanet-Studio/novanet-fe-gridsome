<template id="modal-template">
  <transition class="modal" name="modal">
    <div class="modal__mask">
      <div class="modal__wrapper">
        <div class="modal__container">
          <button class="modal__boton" @click="$emit('close')">
            <font-awesome :icon="['fa', 'times']" size="1x" />
          </button>
          <div class="modal__converter">
            <div v-if="image">
              <g-image :src="image.url" :alt="image.alternativeText" />
            </div>
            
            <div v-if="content">
              <div class="modal__item">
                <div
                  :data-icon="content.icono"
                  class="services__icon icon"
                ></div>
                <h3 class="services__title">{{ content.titulo }}</h3>
                <vue-markdown>{{ content.descripcion }}</vue-markdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import VueMarkdown from '@adapttive/vue-markdown'

export default {
  props: { image: Object, content: Object },
   components: {
    VueMarkdown,
  },
  computed: {
    console: () => console,
  },
}
import './Modal.scss'
</script>
