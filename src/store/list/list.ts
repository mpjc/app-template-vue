import { Module } from 'vuex';

import RootState from '../app-state';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

export interface ListItem {
  id: number;
  value: string;
  checked: boolean;
}

export interface ListState {
  index: number;
  items: ListItem[];
}

export const list: Module<ListState, RootState> = {
  namespaced: true,
  state: {
    index: 0,
    items: [],
  },
  getters,
  actions,
  mutations,
};
