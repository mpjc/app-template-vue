<template>
  <div class="ListItems">
    <div v-if="items.length">
      <ListItemView
        v-for="item in items"
        :item="item"
        :key="item.id"
        @toggle="toggleListItem"
        @edit="setEditItem"
        @remove="removeListItem"
      />
    </div>
    <slot v-else></slot>

    <Modal v-if="editItem" @close="clearEditItem" :closeOnBgClick="true">
      <div slot="header">
        <div class="ListItems-edit-header">Edit item</div>
      </div>
      <ListItemEdit
        slot="content"
        :item="editItem"
        @update="updateListItem"
        @cancel="clearEditItem"
      />
    </Modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import { mapGetters, mapActions } from 'vuex';

import { Modal } from '@/shared';
import { ListItem } from '@/store/list';
import ListItemEdit from './ListItemEdit.vue';
import ListItemView from './ListItemView.vue';

@Component({
  components: { ListItemEdit, ListItemView, Modal },
  methods: mapActions('list', ['edit', 'remove', 'toggle']),
})
export default class ListItems extends Vue {
  // State
  edit!: (payload: { id: number, value: string }) => void;
  remove!: (id: number) => void;
  toggle!: (id: number) => void;

  @Prop() items!: ListItem[];

  editItem: ListItem | null = null;

  setEditItem(item: ListItem) {
    this.editItem = item;
  }

  clearEditItem() {
    this.editItem = null;
  }

  updateListItem(payload: { id: number, value: string }) {
    this.edit(payload);
    this.clearEditItem();
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
.ListItems {
  &-edit-header {
    font-size: 1.1em;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--color-1);
  }
}
</style>
