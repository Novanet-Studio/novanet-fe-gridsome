<template id="modal-template">
  <transition class="modal" name="modal">
    <div class="modal__mask">
      <div class="modal__wrapper">
        <div class="modal__container">
          <button class="modal__boton" @click="$emit('close')">
            <font-awesome :icon="['fa', 'times']" size="1x" />
          </button>
          <div class="modal__converter">
              <img :src="image" alt="Some image">
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: { image: String },
}
import '../layouts/Home.scss'
</script>