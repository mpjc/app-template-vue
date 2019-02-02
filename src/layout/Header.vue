<template>
  <header class="header">
    <div id="nav">
      <router-link to="/">Home</router-link>&nbsp;|
      <router-link to="/counter">Counter</router-link>&nbsp;|
      <router-link to="/list">List</router-link>
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
  background-color: #161616;
  #nav {
    padding: 30px;
    a {
      font-size: 1.25em;
      padding: 0 2px;
      font-weight: bold;
      color: #cecece;
      &.router-link-exact-active {
        color: #4060c0;
      }
    }
  }
}
</style>
