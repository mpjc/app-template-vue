<template>
  <div class="Home">
    <h3>Home</h3>
    <p>Sample Vue.js SPA (Single Page Application), implemented in TypeScript.</p>
    <p>Demonstrates simple application structure and basic functionality such as data and event binding.</p>
    <p>Additional features include routing, state management (with vuex) and basic theming.</p>
    <p>
      The icons used throughout are from
      <a href="https://fontawesome.com">Font Awesome</a>.
    </p>
    <p>... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
  p {
    font-size: 0.9em;
  }
  a {
    color: var(--accent-color-1);
  }
}
</style>
