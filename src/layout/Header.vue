<template>
  <header class="Header">
    <div id="nav">
      <router-link to="/">
        <i class="fas fa-home"></i>
      </router-link>
      <span>|</span>
      <router-link to="/list">
        <i class="fas fa-tasks"></i>
      </router-link>
      <span>|</span>
      <router-link to="/game">
        <i class="fas fa-gamepad"></i>
      </router-link>
      <span>|</span>
      <router-link to="/settings">
        <i class="fas fa-cog"></i>
      </router-link>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue { }
</script>

<style scoped lang="scss">
@import "../colors.scss";
.Header {
  background-color: var(--bg-color-2);
  #nav {
    padding: 15px;
    a {
      font-size: 1.5em;
      padding: 0 12px;
      font-weight: bold;
      color: var(--color-1);
      &.router-link-exact-active {
        color: var(--accent-color-1);
      }
    }
  }
}
</style>
