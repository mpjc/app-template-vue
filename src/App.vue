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
@import "./common.scss";
#app {
  font-size: 1.25em;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;

  height: 100%;
  display: flex;
  flex-direction: column;

  color: var(--color-1);
  background-color: var(--bg-color-1);

  .Header {
    flex-shrink: 0;
  }
  .Main {
    flex: 1 0 auto;
    padding-bottom: 20px;
  }
  .Footer {
    flex-shrink: 0;
  }
}
</style>
