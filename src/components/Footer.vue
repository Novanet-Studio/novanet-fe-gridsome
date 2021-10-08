<template>
  <footer class="footer">
    <ul class="rrss">
      <a class="rrss__link rrss__link--triangle" to="/">
        <font-awesome :icon="['fab', 'facebook-f']" />
      </a>
      <a class="rrss__link rrss__link--square" to="/">
        <font-awesome :icon="['fab', 'twitter']" />
      </a>
      <a class="rrss__link rrss__link--circle" to="/">
        <font-awesome :icon="['fab', 'instagram']" />
      </a>
    </ul>
  </footer>
</template>

<script lang="scss">
@import '../layouts/Home.scss'
</script>
