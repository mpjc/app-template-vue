<template>
  <div class="PuzzleSetup">
    <div>Choose your difficulty</div>
    <div>
      <button class="PuzzleSetup-start" @click="setup(2)">Super easy</button>
    </div>
    <div>
      <button class="PuzzleSetup-start" @click="setup(3)">Normal</button>
    </div>
    <div>
      <button class="PuzzleSetup-start" @click="setup(4)">Hard</button>
    </div>
    <div>
      <button class="PuzzleSetup-start" @click="setup(6)">I have time to waste...</button>
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
  setup!: (size: number) => void;
}
</script>

<style scoped lang="scss">
.PuzzleSetup {
  &-start {
    width: 300px;
    height: 40px;
    margin: 10px;
    border-radius: 6px;
    font-size: 1.2em;
  }
}
</style>
