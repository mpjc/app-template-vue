import Vue from 'vue';
import Vuex from 'vuex';
import AppState from './app-state';
import { counter } from './counter';
import { list } from './list';

Vue.use(Vuex);

export default new Vuex.Store<AppState>({
  state: {
    version: '1.0.0',
  },
  modules: {
    counter,
    list,
  },
});
