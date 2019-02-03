<template>
  <div id="app" :class="theme">
    <Header/>
    <Main/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Footer, Header, Main } from './layout';

import { SettingsState } from '@/store/settings';
import { mapGetters } from 'vuex';

@Component({
  components: {
    Header,
    Main,
    Footer,
  },
  computed: mapGetters('settings', ['theme']),
})
export default class App extends Vue {
  theme!: 'dark' | 'light';
}
</script>

<style lang="scss">
:root {
  --color-1: #d6d6d6;
  --color-2: #c0c0c0;
  --bg-color-1: #222222;
  --bg-color-2: #161616;
}
.light {
  --color-1: #222222;
  --color-2: #161616;
  --bg-color-1: #d6d6d6;
  --bg-color-2: #c0c0c0;
}
.dark {
  --color-1: #d6d6d6;
  --color-2: #c0c0c0;
  --bg-color-1: #222222;
  --bg-color-2: #161616;
}
body {
  color: #d6d6d6;
  background-color: #222222;
}

#app {
  font-size: 1.25em;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  min-height: 100vh;
  text-align: center;

  color: var(--color-1);
  background-color: var(--bg-color-1);
}
</style>
