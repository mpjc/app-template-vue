<template>
  <footer class="footer">
    <h4>&copy; mpjc 2019</h4>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue { }
</script>

<style scoped lang="scss">
.footer {
  padding: 10px;
  background-color: #161616;
}
</style>
