import { ActionTree } from 'vuex';

import AppState from '../app-state';
import { ListState } from './list';

export const actions: ActionTree<ListState, AppState> = {
  add({ commit }, value: string) {
    commit('add', value);
  },
  remove({ commit }, id: number) {
    commit('remove', id);
  },
  toggle({ commit }, id: number) {
    commit('toggle', id);
  },
  clear({ commit }) {
    commit('clear');
  },
};
