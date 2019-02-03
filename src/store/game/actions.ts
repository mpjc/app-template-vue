import { ActionTree } from 'vuex';

import AppState from '../app-state';
import { GameState } from './game';

export const actions: ActionTree<GameState, AppState> = {
  moveTile({ commit }, payload) {
    commit('moveTile', payload);
  },
  resize({ commit }, size: number) {
    commit('resize', size);
  },
  reset({ commit }) {
    commit('reset');
  },
};
