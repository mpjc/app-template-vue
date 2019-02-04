import { Module } from 'vuex';

import RootState from '../app-state';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { createBoard } from './utils';

export const enum GamePhase {
  Setup = 'Setup',
  Playing = 'Playing',
  Won = 'Won',
}

export interface GameTile {
  x: number;
  y: number;
  isEmpty: boolean;
}

export interface GameState {
  board: GameTile[][];
  boardSize: number;
  phase: GamePhase;
}

export const game: Module<GameState, RootState> = {
  namespaced: true,
  state: {
    boardSize: 0,
    board: createBoard(0),
    phase: GamePhase.Setup,
  },
  getters,
  actions,
  mutations,
};
