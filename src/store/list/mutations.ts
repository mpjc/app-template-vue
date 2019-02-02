import { MutationTree } from 'vuex';

import { ListState } from './list';

export const mutations: MutationTree<ListState> = {
  add(state, value: string) {
    state.items.push({
      id: state.index++,
      value,
      checked: false,
    });
  },
  remove(state, id: number) {
    state.items = state.items.filter((i) => i.id !== id);
  },
  toggle(state, id: number) {
    state.items = state.items.map((i) =>
      i.id === id ? { ...i, checked: !i.checked } : i);
  },
  clear(state) {
    state.items = [];
  },
};
