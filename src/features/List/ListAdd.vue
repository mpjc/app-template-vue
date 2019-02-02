<template>
  <div class="list-add">
    <input placeholder="new item" v-model="inputValue" @keypress.enter="addListItem">
    <button @click="addListItem">
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
  // State actions
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
.list-add {
  padding: 8px;
  input {
    width: 70%;
    font-size: 1.2em;
    border-radius: 4px;
    padding-left: 2px;
  }
  button {
    font-size: 1.2em;
    margin: 0 8px;
    width: 60px;
    height: 36px;
    border-radius: 6px;
  }
}
</style>
