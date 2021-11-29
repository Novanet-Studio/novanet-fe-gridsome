<template>
  <div class="nav--main">
    <div
      class="nav__sidebar-backdrop"
      @click="closeSidebarPanel"
      v-if="isPanelOpen"
    ></div>
    <transition name="nav__slide">
      <div v-if="isPanelOpen" class="nav__sidebar-panel">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import { store, mutations } from '../../utils/store'

export default {
  methods: {
    closeSidebarPanel: mutations.toggleNav,
  },
  computed: {
    isPanelOpen() {
      return store.isNavOpen
    },
  },
}
</script>
