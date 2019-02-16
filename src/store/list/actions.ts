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
  edit({ commit }, payload) {
    commit('edit', payload);
  },
  toggle({ commit }, id: number) {
    commit('toggle', id);
  },
  clear({ commit }) {
    commit('clear');
  },
};
