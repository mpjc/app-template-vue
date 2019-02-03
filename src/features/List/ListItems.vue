<template>
  <div class="ListItems">
    <div v-if="items.length">
      <ListItemRow
        v-for="item in items"
        :item="item"
        :key="item.id"
        @toggle="toggleListItem"
        @remove="removeListItem"
      />
    </div>
    <slot v-else></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import { mapGetters, mapActions } from 'vuex';

import ListItemRow from './ListItemRow.vue';
import { ListItem } from '@/store/list';

@Component({
  components: { ListItemRow },
  methods: mapActions('list', ['remove', 'toggle']),
})
export default class ListItems extends Vue {
  // State
  remove!: (id: number) => void;
  toggle!: (id: number) => void;

  @Prop() items!: ListItem[];

  toggleListItem(item: ListItem) {
    this.toggle(item.id);
  }

  removeListItem(item: ListItem) {
    this.remove(item.id);
  }
}
</script>

<style scoped lang="scss">
.ListItems {
}
</style>
