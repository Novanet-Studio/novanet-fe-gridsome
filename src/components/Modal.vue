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
              <g-image
                :src="image.url"
                :alt="image.alternativeText"
                background="#ededed"
                blur="40"
              />
            </div>

            <div v-if="content">
              <div :class="clase">
                <div
                  :data-icon="content.icono"
                  class="services__icon icon"
                ></div>
                <h3 class="services__title">{{ content.titulo }}</h3>
                <vue-markdown>{{ content.descripcion }}</vue-markdown>
              </div>
            </div>

            <div v-if="item" :class="clase">
              <div v-for="element in item" :key="element.id" class="modal__index-elements">
                <div>
                  <div :data-icon="element.icono" class="icon modal__index-icons"></div>
                  <h3 class="modal__index-titulo">{{ element.titulo }}</h3>
                  <div v-for="servicio in servicios" :key="servicio.id">
                  <g-link :to="`/servicios#${servicio.id}`">Ver más</g-link>
                  </div>
                </div>
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
  props: { image: Object, content: Object, item: Array, servicios: Array, clase: String },
  components: {
    VueMarkdown,
  },
  computed: {
    console: () => console,
  },
}
import './Modal.scss'
</script>
