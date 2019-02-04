<template>
  <div class="Game">
    <h3>Sliding Puzzle</h3>
    <div v-if="phase === 'Setup'">
      <PuzzleSetup/>
    </div>
    <div v-else>
      <PuzzleBoard/>
      <div v-if="phase === 'Won'">
        <div>You win!</div>
        <button @click="quit">Play again?</button>
      </div>
      <div v-else>
        <button @click="quit">Quit</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters, mapActions } from 'vuex';

import PuzzleBoard from './PuzzleBoard.vue';
import PuzzleSetup from './PuzzleSetup.vue';
import { GameTile, GamePhase } from '@/store/game';

@Component({
  components: { PuzzleBoard, PuzzleSetup },
  computed: mapGetters('game', ['phase']),
  methods: mapActions('game', ['quit']),
})
export default class Game extends Vue {
  phase!: GamePhase;
  quit!: () => void;
}
</script>

<style scoped lang="scss">
.Game {
}
</style>
