import { GetterTree } from 'vuex';

import AppState from '../app-state';
import { CounterState } from './counter';

export const getters: GetterTree<CounterState, AppState> = {
  value(state): number {
    return state.value;
  },
};
