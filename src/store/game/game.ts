import { Module } from 'vuex';

import RootState from '../app-state';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { createBoard, SlidingPuzzleTile } from '@/utils/sliding-puzzle.utils';

export const enum GamePhase {
  Setup = 'Setup',
  Playing = 'Playing',
  Won = 'Won',
}

// tslint:disable-next-line:no-empty-interface
export interface GameTile extends SlidingPuzzleTile {
}

export interface GameState {
  board: SlidingPuzzleTile[][];
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
