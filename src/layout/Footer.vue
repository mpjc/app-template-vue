<template>
  <footer class="Footer">
    <div>&copy; mpjc 2019</div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue { }
</script>

<style scoped lang="scss">
.Footer {
  padding: 20px;
  background-color: var(--bg-color-2);
}
</style>
