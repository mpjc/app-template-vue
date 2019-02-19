<template>
  <div class="PuzzleBoard">
    <div v-for="(row, rowIndex) in board" :key="rowIndex" class="PuzzleBoard-row">
      <div
        v-for="(tile, colIndex) in row"
        :key="`${rowIndex}-${colIndex}`"
        class="PuzzleBoard-tile"
        @click="moveTile({x: colIndex, y: rowIndex})"
      >
        <PuzzleTile :boardSize="boardSize" :tile="tile"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters, mapActions } from 'vuex';

import { GameTile } from '@/store/game';
import PuzzleTile from './PuzzleTile.vue';

@Component({
  components: { PuzzleTile },
  computed: mapGetters('game', ['board', 'boardSize']),
  methods: mapActions('game', ['moveTile']),
})
export default class Game extends Vue {
  // State
  board!: GameTile[][];
  boardSize!: number;
  moveTile!: (coords: { x: number, y: number }) => void;
}
</script>

<style scoped lang="scss">
.PuzzleBoard {
  display: flex;
  flex-direction: column;
  height: 80vmin;
  width: 80vmin;
  max-height: 460px;
  max-width: 460px;
  margin: 0 auto 20px auto;
  border-radius: 6px;
  background-color: var(--color-2);
  &-row {
    display: flex;
    flex: 1;
  }
  &-cell {
    flex: 1;
  }
  &-tile {
    flex: 1;
  }
}
</style>
