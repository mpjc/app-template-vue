import { ActionTree } from 'vuex';

import AppState from '../app-state';
import { CounterState } from './counter';

export const actions: ActionTree<CounterState, AppState> = {
  increment({ commit }) {
    commit('increment');
  },
  decrement({ commit }) {
    commit('decrement');
  },
  set({ commit }, value: number) {
    commit('set', value);
  },
};
