import { GetterTree } from 'vuex';

import AppState from '../app-state';
import { ListState, ListItem } from './list';

export const getters: GetterTree<ListState, AppState> = {
  items(state): ListItem[] {
    return state.items;
  },
  checkedItems(state): ListItem[] {
    return state.items.filter((i) => i.checked);
  },
  uncheckedItems(state): ListItem[] {
    return state.items.filter((i) => !i.checked);
  },
};
