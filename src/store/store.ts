import Vue from 'vue';
import Vuex from 'vuex';
import AppState from './app-state';
import { counter } from './counter';
import { game } from './game';
import { list } from './list';
import { settings } from './settings';

Vue.use(Vuex);

export default new Vuex.Store<AppState>({
  state: {
    version: '1.0.0',
  },
  modules: {
    counter,
    game,
    list,
    settings,
  },
});
