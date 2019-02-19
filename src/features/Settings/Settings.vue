<template>
  <div class="Settings">
    <h3>Settings</h3>
    <div class="Settings-group">
      <div class="Settings-header">Display</div>
      <div class="Settings-item">
        <div>Theme: {{theme}}</div>
        <div @click="toggleTheme">
          <i v-if="theme === 'dark'" class="fas fa-toggle-on fa-lg"></i>
          <i v-else class="fas fa-toggle-off fa-lg"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters, mapActions } from 'vuex';

@Component({
  computed: mapGetters('settings', ['theme']),
  methods: mapActions('settings', ['toggleTheme']),
})
export default class Settings extends Vue {
  theme!: 'dark' | 'light';
  toggleTheme!: () => void;
}
</script>

<style scoped lang="scss">
.Settings {
  margin: 0 auto;
  max-width: 800px;
  &-group {
    border-radius: 6px;
    padding: 4px;
  }
  &-header {
    font-size: 1.2em;
    text-align: left;
    padding-bottom: 8px;
    margin-bottom: 8px;
    border-bottom: 1px solid var(--color-1);
  }
  &-item {
    display: flex;
    justify-content: space-between;
    font-size: 1.1em;
    padding: 6px 20px;
    height: 24px;
    line-height: 24px;
  }
}
</style>
