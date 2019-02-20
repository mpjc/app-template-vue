<template>
  <div id="app" :class="theme">
    <div class="app-content">
      <Header/>
      <Main/>
    </div>
    <div class="app-footer">
      <Footer/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { Footer, Header, Main } from '@/layout';
import { SettingsState } from '@/store/settings';

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
@import "./assets/common.scss";
#app {
  font-size: 1.2em;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: var(--color-1);
  background-color: var(--bg-color-1);
  .app-content {
    flex: 1 0 auto;
    padding-bottom: 20px;
  }
  .app-footer {
    flex-shrink: 0;
  }
}
</style>
