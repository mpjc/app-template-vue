import { GetterTree } from 'vuex';

import AppState from '../app-state';
import { GameState, GameTile, GamePhase } from './game';

export const getters: GetterTree<GameState, AppState> = {
  board(state): GameTile[][] {
    return state.board;
  },
  boardSize(state): number {
    return state.boardSize;
  },
  phase(state): GamePhase {
    return state.phase;
  },
};
