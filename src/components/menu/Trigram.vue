<template>
  <div
    id="trigram"
    :class="{ active: isTrigramActive }"
    class="header__trigram"
    @click.prevent="toggle"
  >
    <slot>
      <button type="button" title="Menu">
        ☰
      </button>
    </slot>
  </div>
</template>

<script>
import { store, mutations } from '../../utils/store'

export default {
  computed: {
    isTrigramActive() {
      return store.isNavOpen
    },
  },
  methods: {
    toggle() {
      mutations.toggleNav()
    },
  },
}
</script>
