<template>
  <div id="app">
    <Header/>
    <Main/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Footer, Header, Main } from './layout';

@Component({
  components: {
    Header,
    Main,
    Footer,
  },
})
export default class App extends Vue { }
</script>

<style lang="scss">
body {
  font-size: 1.25em;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #cecece;
  background-color: #222222;
  text-align: center;
}
</style>
