<template>
  <div class="Game">
    <h3>Sliding Puzzle</h3>
    <div v-if="phase === 'Setup'">
      <PuzzleSetup/>
    </div>
    <div v-else>
      <p>Tap a tile to move it</p>
      <PuzzleBoard/>
      <Modal v-if="phase === 'Won'" :showClose="false">
        <div slot="header"></div>
        <div slot="content">
          <div class="Game-win-text">You win!</div>
          <div class="Game-play-again ui-button" @click="quit">Play again?</div>
        </div>
      </Modal>
      <div class="Game-controls" v-else>
        <div class="Game-control ui-button" @click="quit">Quit</div>
        <div class="Game-control ui-button" @click="shuffle">Shuffle</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters, mapActions } from 'vuex';

import { Modal } from '@/shared';
import { GameTile, GamePhase } from '@/store/game';
import PuzzleBoard from './PuzzleBoard.vue';
import PuzzleSetup from './PuzzleSetup.vue';

@Component({
  components: { Modal, PuzzleBoard, PuzzleSetup },
  computed: mapGetters('game', ['phase']),
  methods: mapActions('game', ['shuffle', 'quit']),
})
export default class Game extends Vue {
  // State
  phase!: GamePhase;
  quit!: () => void;
  shuffle!: () => void;
}
</script>

<style scoped lang="scss">
.Game {
  margin: 0 auto;
  max-width: 800px;
  &-win-text {
    font-size: 1.8em;
  }
  &-play-again {
    margin: 20px 0 10px 0;
    padding: 0 20px;
  }
  &-controls {
    display: flex;
    justify-content: center;
  }
  &-control {
    margin: 0 10px;
    min-width: 30%;
  }
}
</style>
