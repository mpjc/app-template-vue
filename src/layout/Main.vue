<template>
  <main class="main">
    <router-view/>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Main extends Vue { }
</script>

<style scoped lang="scss">
.main {
  margin: 0 auto;
  padding: 10px;
  max-width: 1024px;
  min-height: 60vh;
}
</style>
