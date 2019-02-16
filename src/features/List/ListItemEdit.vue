<template>
  <div class="ListItemEdit">
    <input class="ListItemEdit-text" v-model="inputValue">
    <div class="ListItemEdit-controls">
      <div class="ListItemEdit-control" @click="update">Update</div>
      <div class="ListItemEdit-control" @click="cancel">Cancel</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import { ListItem } from '@/store/list';

@Component
export default class ListItemEdit extends Vue {
  inputValue = '';

  @Prop() item!: ListItem;
  @Emit() update() { return { id: this.item.id, value: this.inputValue }; }
  @Emit() cancel() { return; }

  mounted() {
    this.inputValue = this.item.value;
  }
}
</script>

<style scoped lang="scss">
.ListItemEdit {
  &-text {
    width: 90%;
    font-size: 1.2em;
    border-radius: 4px;
    padding-left: 2px;
  }
  &-controls {
    display: flex;
    justify-content: space-evenly;
    margin-top: 16px;
  }
  &-control {
    height: 20px;
    line-height: 20px;
    padding: 10px 20px;
    color: var(--color-1);
    background-color: var(--bg-color-1);
    border: 1px solid var(--color-1);
    border-radius: 4px;
    min-width: 20%;
    &:hover {
      cursor: pointer;
      color: var(--bg-color-1);
      background-color: var(--color-1);
    }
  }
}
</style>
