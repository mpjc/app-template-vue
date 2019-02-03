<template>
  <div class="ListItemRow">
    <span class="ListItemRow-text">{{item.value}}</span>
    <div class="ListItemRow-controls">
      <button class="ListItemRow-toggle" @click="toggle">
        <i v-if="item.checked" class="far fa-check-circle"></i>
        <i v-else class="far fa-circle"></i>
      </button>
      <button class="ListItemRow-remove" @click="remove">
        <i class="fas fa-times"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

import { ListItem } from '@/store/list';

@Component
export default class ListItemRow extends Vue {
  @Prop() item!: ListItem;
  @Emit() toggle() { return this.item; }
  @Emit() remove() { return this.item; }
}
</script>

<style scoped lang="scss">
@import "../../colors.scss";
.ListItemRow {
  border-radius: 4px;
  color: var(--color-1);
  background-color: var(--bg-color-2);
  border: 1px solid var(--color-2);
  padding: 2px;
  margin: 2px;
  display: flex;
  justify-content: space-between;
  list-style: none;
  text-align: left;
  min-height: 36px;
  line-height: 36px;
  &-text {
    padding: 0 2px;
  }
  &-controls {
    white-space: nowrap;
    button {
      margin: 0 2px;
      width: 40px;
      height: 36px;
      font-size: 1.2em;
      border-radius: 6px;
    }
  }
}
</style>
