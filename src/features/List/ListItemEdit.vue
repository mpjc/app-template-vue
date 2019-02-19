<template>
  <div class="ListItemEdit">
    <input class="ListItemEdit-text" v-model="inputValue">
    <div class="ListItemEdit-controls">
      <div class="ListItemEdit-control ui-button" @click="update">Update</div>
      <div class="ListItemEdit-control ui-button" @click="cancel">Cancel</div>
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
    padding-left: 4px;
    margin: 8px 0 24px 0;
  }
  &-controls {
    display: flex;
    justify-content: space-evenly;
  }
  &-control {
    font-size: 1.1em;
    height: 18px;
    line-height: 18px;
    padding: 8px 16px;
    border-radius: 4px;
    min-width: 20%;
  }
}
</style>
