<template>
  <header class="header">
    <div id="nav">
      <router-link to="/">
        <i class="fas fa-home"></i>
      </router-link>&nbsp;|
      <router-link to="/counter">
        <i class="fas fa-calculator"></i>
      </router-link>&nbsp;|
      <router-link to="/list">
        <i class="fas fa-tasks"></i>
      </router-link>&nbsp;|
      <router-link to="/game">
        <i class="fas fa-gamepad"></i>
      </router-link>&nbsp;|
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
.header {
  background-color: var(--bg-color-2);
  #nav {
    padding: 15px;
    a {
      font-size: 1.5em;
      padding: 0 6px;
      font-weight: bold;
      color: var(--color-1);
      &.router-link-exact-active {
        color: var(--link-color-1);
      }
    }
  }
}
</style>
