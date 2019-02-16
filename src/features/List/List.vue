<template>
  <div class="List">
    <h3>List</h3>
    <ListAdd @add="addItem"/>

    <div v-if="items.length">
      <ListItems :items="uncheckedItems">
        <div>All items complete!</div>
      </ListItems>
      <hr v-if="checkedItems.length" class="List-separator">
      <ListItems :items="checkedItems"/>
      <div class="List-clear ui-button" @click="clear">Clear</div>
    </div>
    <div v-else class="List-empty">Add an item...</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters, mapActions } from 'vuex';

import { ListItem } from '@/store/list';
import ListAdd from './ListAdd.vue';
import ListItems from './ListItems.vue';
import { Modal } from '@/shared';

@Component({
  components: { ListAdd, ListItems, Modal },
  computed: mapGetters('list', ['items', 'checkedItems', 'uncheckedItems']),
  methods: mapActions('list', ['add', 'clear']),
})
export default class List extends Vue {
  // State
  items!: ListItem[];
  checkedItems!: ListItem[];
  uncheckedItems!: ListItem[];
  add!: (value: string) => void;
  clear!: () => void;

  modalVisible = false;

  addItem(value: string) {
    if (value) {
      this.add(value);
    }
  }

  showModal() {
    this.modalVisible = true;
  }

  hideModal() {
    this.modalVisible = false;
  }
}
</script>

<style scoped lang="scss">
.List {
  &-separator {
    margin: 16px 0;
  }
  &-clear {
    margin: 16px;
  }
  &-empty {
    padding-top: 8px;
  }
}
.ListItems {
  margin-top: 12px;
}
</style>
