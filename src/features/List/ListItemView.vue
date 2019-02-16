<template>
  <div class="ListItemView">
    <div class="ListItemView-controls">
      <div class="ListItemView-control" @click="toggle">
        <i v-if="item.checked" class="far fa-check-square"></i>
        <i v-else class="far fa-square"></i>
      </div>
    </div>
    <div class="ListItemView-text" :class="{'checked': item.checked}">{{item.value}}</div>
    <div class="ListItemView-controls">
      <div class="ListItemView-control" @click="edit">
        <i class="fas fa-edit"></i>
      </div>
      <div class="ListItemView-control" @click="remove">
        <i class="fas fa-trash"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import { ListItem } from '@/store/list';

@Component
export default class ListItemView extends Vue {
  @Prop() item!: ListItem;
  @Emit() toggle() { return this.item; }
  @Emit() edit() { return this.item; }
  @Emit() remove() { return this.item; }
}
</script>

<style scoped lang="scss">
@import "../../colors.scss";
.ListItemView {
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
    padding: 0 8px;
    overflow-wrap: normal;
    flex: 1 1 auto;
    &.checked {
      text-decoration: line-through;
    }
  }
  &-controls {
    line-height: 0;
    flex: 0 0 auto;
  }
  &-control {
    color: var(--color-1);
    display: inline-block;
    margin: 0 2px;
    height: 36px;
    width: 36px;
    text-align: center;
    font-size: 1.2em;
    border-radius: 6px;
    cursor: pointer;
    :hover {
      color: var(--color-2);
    }
    i {
      line-height: 36px;
    }
  }
}
</style>
