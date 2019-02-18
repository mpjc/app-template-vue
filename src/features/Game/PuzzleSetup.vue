<template>
  <div class="PuzzleSetup">
    <div class="PuzzleSetup-message">Choose your difficulty</div>
    <div class="PuzzleSetup-row">
      <div class="PuzzleSetup-start ui-button" @click="setup(2)">Super easy</div>
    </div>
    <div class="PuzzleSetup-row">
      <div class="PuzzleSetup-start ui-button" @click="setup(3)">Normal</div>
    </div>
    <div class="PuzzleSetup-row">
      <div class="PuzzleSetup-start ui-button" @click="setup(4)">Hard</div>
    </div>
    <div class="PuzzleSetup-row">
      <div class="PuzzleSetup-start ui-button" @click="setup(6)">I have time to waste...</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';

@Component({
  methods: mapActions('game', ['setup']),
})
export default class PuzzleSetup extends Vue {
  // State
  setup!: (size: number) => void;
}
</script>

<style scoped lang="scss">
.PuzzleSetup {
  &-message {
    margin: 20px 0;
  }
  &-row {
    display: flex;
    justify-content: center;
  }
  &-start {
    min-width: 300px;
    height: 40px;
    line-height: 40px;
    margin: 10px;
    font-size: 1.2em;
  }
}
</style>
