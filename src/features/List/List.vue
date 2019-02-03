<template>
  <div class="List">
    <h3>List</h3>
    <ListAdd/>

    <div v-if="items.length">
      <ListItems :items="uncheckedItems">
        <div>All done!</div>
      </ListItems>
      <hr v-if="checkedItems.length" class="List-separator">
      <ListItems :items="checkedItems"/>
      <button class="List-clear" @click="clear">Clear</button>
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
  methods: mapActions('list', ['clear']),
})
export default class List extends Vue {
  // State
  items!: ListItem[];
  checkedItems!: ListItem[];
  uncheckedItems!: ListItem[];
  clear!: () => void;
}
</script>

<style scoped lang="scss">
.List {
  &-separator {
    margin: 16px 0;
  }
  &-clear {
    font-size: 1.2em;
    margin: 16px;
    width: 120px;
    height: 36px;
    border-radius: 6px;
  }
}
</style>
