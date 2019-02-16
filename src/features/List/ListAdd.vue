<template>
  <div class="ListAdd">
    <input class="ListAdd-text" placeholder="..." v-model="inputValue" @keypress.enter="add">
    <div class="ListAdd-add" @click="add">
      <i class="fas fa-plus"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';
import { mapActions } from 'vuex';

@Component
export default class ListAdd extends Vue {
  inputValue = '';

  @Emit() add() {
    const toAdd = this.inputValue;
    this.inputValue = '';
    return toAdd;
  }
}
</script>

<style scoped lang="scss">
@import "../../colors.scss";
.ListAdd {
  padding: 8px;
  &-text {
    width: 75%;
    font-size: 1.2em;
    border-radius: 4px;
    padding-left: 2px;
  }
  &-add {
    display: inline-block;
    color: var(--color-1);
    border-color: $color-green;
    background-color: $color-green;
    font-size: 1.2em;
    margin: 0 8px;
    width: 36px;
    height: 32px;
    line-height: 32px;
    border-radius: 6px;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
