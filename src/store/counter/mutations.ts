import { MutationTree } from 'vuex';

import { CounterState } from './counter';

export const mutations: MutationTree<CounterState> = {
  increment(state) {
    state.value++;
  },
  decrement(state) {
    state.value--;
  },
  set(state, value: number) {
    state.value = value;
  },
};
