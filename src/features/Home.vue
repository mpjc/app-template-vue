<template>
  <div class="Home">
    <h3>Home</h3>
    <div class="Home-section">
      <p>Sample Vue.js SPA (Single Page Application), implemented in TypeScript.</p>
      <p>Demonstrates simple application structure with the usual basic functionality.</p>
    </div>
    <div class="Home-section Home-features">
      <p>Additional features include:</p>
      <p>Routing with vue-router</p>
      <p>State management with vuex</p>
      <p>Theming with css variables</p>
      <p>And a totally awesome game!</p>
    </div>
    <div class="Home-section">
      <p>
        The icons used are from
        <a href="https://fontawesome.com">Font Awesome</a>.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue { }
</script>

<style scoped lang="scss">
@import "../colors.scss";
.Home {
  margin: 0 auto;
  max-width: 800px;
  p {
    font-size: 0.9em;
  }
  &-section {
    margin-bottom: 34px;
  }
  &-features p {
    margin: 6px;
  }
  a {
    color: var(--accent-color-1);
  }
}
</style>
