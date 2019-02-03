<template>
  <div class="list-items">
    <div v-if="items.length">
      <div class="list-item" v-for="item in items" :key="item.id">
        <span class="list-item__text">{{item.value}}</span>
        <div class="list-item__buttons">
          <button class="list-item__btn" @click="toggle(item)">
            <i v-if="item.checked" class="far fa-check-circle"></i>
            <i v-else class="far fa-circle"></i>
          </button>
          <button class="list-item__btn" @click="remove(item)">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
    </div>
    <slot v-else></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

import { ListItem } from '@/store/list';

@Component
export default class ListItems extends Vue {
  @Prop() items!: ListItem[];

  @Emit() toggle(item: ListItem) {
    return item;
  }

  @Emit() remove(item: ListItem) {
    return item;
  }
}
</script>

<style scoped lang="scss">
.list-items {
  font-size: 1em;
}
.list-item {
  border-radius: 4px;
  color: var(--bg-color-1);
  background-color: var(--color-1);
  padding: 2px;
  margin: 2px;
  display: flex;
  justify-content: space-between;
  list-style: none;
  text-align: left;
  min-height: 36px;
  line-height: 36px;
  &__text {
    padding: 0 2px;
  }
  &__buttons {
    white-space: nowrap;
  }
  &__btn {
    margin: 0 2px;
    width: 40px;
    height: 36px;
    font-size: 1.2em;
    border-radius: 6px;
  }
}
</style>
