<template>
  <footer class="Footer">
    <div class="Footer-text">&copy; mpjc 2019</div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue { }
</script>

<style scoped lang="scss">
.Footer {
  background-color: var(--bg-color-2);
  width: 100%;
  &-text {
    padding: 20px 0;
  }
}
</style>
