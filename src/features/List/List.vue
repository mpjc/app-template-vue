<template>
  <div class="list">
    <h3>List</h3>
    <List-add/>

    <div v-if="items.length">
      <!-- <div class="header-text">Active</div> -->
      <ListItems :items="uncheckedItems" @toggle="toggleListItem" @remove="removeListItem">
        <div>All done!</div>
      </ListItems>
      <hr class="separator">
      <!-- <div class="header-text">Completed</div> -->
      <ListItems :items="checkedItems" @toggle="toggleListItem" @remove="removeListItem">
        <div>None completed...</div>
      </ListItems>

      <button class="clear-all" @click="clear">Clear All</button>
    </div>
    <div v-else>Add an item...</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters, mapActions } from 'vuex';

import { ListItem } from '@/store/list';
import ListAdd from './ListAdd.vue';
import ListItems from './ListItems.vue';

@Component({
  components: { ListAdd, ListItems },
  computed: mapGetters('list', ['items', 'checkedItems', 'uncheckedItems']),
  methods: mapActions('list', ['add', 'remove', 'toggle', 'clear']),
})
export default class List extends Vue {
  // State getters
  items!: ListItem[];
  checkedItems!: ListItem[];
  uncheckedItems!: ListItem[];

  // State actions
  add!: (value: string) => void;
  remove!: (id: number) => void;
  toggle!: (id: number) => void;
  clear!: () => void;

  inputValue: string = '';

  addListItem() {
    if (this.inputValue) {
      this.add(this.inputValue);
      this.inputValue = '';
    }
  }

  toggleListItem(item: ListItem) {
    this.toggle(item.id);
  }

  removeListItem(item: ListItem) {
    this.remove(item.id);
  }
}
</script>

<style scoped lang="scss">
.list {
}
.header-text {
  font-size: 1.2em;
  font-weight: bold;
  padding: 8px 0;
}
.separator {
  margin: 16px 0;
}
.clear-all {
  font-size: 1.2em;
  margin: 16px;
  width: 160px;
  height: 36px;
  border-radius: 6px;
}
</style>
