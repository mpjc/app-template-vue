<template>
  <div v-if="!tile.isEmpty" class="Game-tile" :style="style"></div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

import { GameTile } from '@/store/game';

@Component
export default class GameImageTile extends Vue {
  @Prop() tile!: GameTile;
  @Prop() boardSize!: number;

  get style() {
    const size = this.boardSize;
    const s = size * 100;
    const h = (this.tile.x * 100 / (size - 1)).toFixed(3);
    const v = (this.tile.y * 100 / (size - 1)).toFixed(3);

    return {
      backgroundSize: `${s}% ${s}%`,
      backgroundPosition: `${h}% ${v}%`,
    };
  }
}
</script>

<style scoped lang="scss">
.Game-tile {
  height: 100%;
  border: 1px solid var(--color-1);
  border-radius: 6px;
  background: url("../../assets/logo.png") no-repeat;
  background-color: var(--bg-color-1);
}
</style>
