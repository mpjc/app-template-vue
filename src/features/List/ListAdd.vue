<template>
  <div class="ListAdd">
    <input
      class="ListAdd-text"
      placeholder="..."
      v-model="inputValue"
      @keypress.enter="addListItem"
    >
    <button class="ListAdd-add" @click="addListItem">
      <i class="fas fa-plus"></i>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';

@Component({
  methods: mapActions('list', ['add']),
})
export default class ListAdd extends Vue {
  // State
  add!: (value: string) => void;

  inputValue: string = '';

  addListItem() {
    if (this.inputValue) {
      this.add(this.inputValue);
      this.inputValue = '';
    }
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
    border-color: $color-green;
    background-color: $color-green;
    font-size: 1.2em;
    margin: 0 8px;
    width: 40px;
    height: 36px;
    border-radius: 6px;
  }
}
</style>
