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

export const initialState: ListState = {
  index: 0,
  items: [],
};

export const list: Module<ListState, RootState> = {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
