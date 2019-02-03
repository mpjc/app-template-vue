import { Module } from 'vuex';

import AppState from '../app-state';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

export interface CounterState {
  value: number;
}

export const counter: Module<CounterState, AppState> = {
  namespaced: true,
  state: {
    value: 0,
  },
  getters,
  actions,
  mutations,
};
