import { ActionTree } from 'vuex';

import AppState from '../app-state';
import { GameState } from './game';

export const actions: ActionTree<GameState, AppState> = {
  moveTile({ commit }, payload) {
    commit('moveTile', payload);
  },
  quit({ commit }) {
    commit('quit');
  },
  reset({ commit }) {
    commit('reset');
  },
  setup({ commit }, size: number) {
    commit('setup', size);
  },
};
