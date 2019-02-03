<template>
  <footer class="footer">
    <div>&copy; mpjc 2019</div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue { }
</script>

<style scoped lang="scss">
.footer {
  padding: 20px;
  background-color: var(--bg-color-2);
}
</style>
