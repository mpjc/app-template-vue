<template>
  <div class="Home">
    <h3>Home</h3>
    <p>This is a sample SPA application, implemented using Vue.js</p>
    <p>The application includes basic data and event binding, in addition to routing and state management.</p>
    <p>
      The icons used throughout are from
      <a href="https://fontawesome.com">Font Awesome</a>.
    </p>
    <p>
      ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
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
  a {
    color: var(--color-1);
  }
}
</style>
