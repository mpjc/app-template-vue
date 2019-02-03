<template>
  <div class="Game">
    <h3>Game</h3>
    <div>IsWon: {{isWon}}</div>
    <div class="Game-board">
      <div v-for="(row, rowIndex) in board" :key="rowIndex" class="Game-row">
        <div
          v-for="(tile, colIndex) in row"
          :key="`${rowIndex}-${colIndex}`"
          class="Game-tile"
          @click="moveTile({x: colIndex, y: rowIndex})"
        >
          <GameImageTile :boardSize="boardSize" :tile="tile"/>
        </div>
      </div>
    </div>
    <div>
      <input type="number" v-model="inputValue">
      <button @click="resizeBoard">Resize</button>
    </div>
    <div>
      <button @click="reset">Reset</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters, mapActions } from 'vuex';

import GameImageTile from './GameImageTile.vue';
import { GameTile } from '@/store/game';

@Component({
  components: { GameImageTile },
  computed: mapGetters('game', ['board', 'boardSize', 'isWon']),
  methods: mapActions('game', ['moveTile', 'resize', 'reset']),
})
export default class Game extends Vue {
  board!: GameTile[][];
  boardSize!: number;
  moveTile!: (coords: { x: number, y: number }) => void;
  resize!: (size: number) => void;
  reset!: () => void;

  inputValue: string = '3';

  resizeBoard() {
    const value = parseInt(this.inputValue, 10);
    if (Number.isInteger(value)) {
      this.resize(value);
    }
  }
}
</script>

<style scoped lang="scss">
.Game {
  &-board {
    display: flex;
    flex-direction: column;
    height: 80vmin;
    width: 80vmin;
    margin: 0 auto 40px auto;
    border-radius: 6px;
    background-color: var(--color-1);
  }
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
