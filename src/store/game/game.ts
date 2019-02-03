import { Module } from 'vuex';

import RootState from '../app-state';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { createBoard } from './utils';

export interface GameTile {
  x: number;
  y: number;
  isEmpty: boolean;
}

export interface GameState {
  boardSize: number;
  board: GameTile[][];
  isWon: boolean;
}

export const game: Module<GameState, RootState> = {
  namespaced: true,
  state: {
    boardSize: 3,
    board: createBoard(3),
    isWon: false,
  },
  getters,
  actions,
  mutations,
};
