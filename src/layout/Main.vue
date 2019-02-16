<template>
  <main class="Main">
    <router-view/>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Main extends Vue { }
</script>

<style scoped lang="scss">
.Main {
  margin: 0 auto;
  padding: 10px;
  width: 90%;
  max-width: 1024px;
}
</style>
