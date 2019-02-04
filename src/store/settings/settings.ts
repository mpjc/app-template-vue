import { Module } from 'vuex';

import AppState from '../app-state';

export interface SettingsState {
  theme: 'light' | 'dark';
}

export const settings: Module<SettingsState, AppState> = {
  namespaced: true,
  state: {
    theme: 'dark',
  },
  getters: {
    theme(state): 'light' | 'dark' {
      return state.theme;
    },
  },
  actions: {
    toggleTheme({ commit }, value: string) {
      commit('toggleTheme', value);
    },
  },
  mutations: {
    toggleTheme(state) {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
  },
};
