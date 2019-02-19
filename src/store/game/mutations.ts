import { MutationTree } from 'vuex';

import { GameState, GamePhase } from './game';
import { createBoard, tryMove, isCorrectOrder } from '@/utils/sliding-puzzle.utils';

export const mutations: MutationTree<GameState> = {
  moveTile(state, p: { x: number, y: number }) {
    if (state.phase === GamePhase.Playing) {
      state.board = tryMove(state.board, p);
      state.phase = isCorrectOrder(state.board) ? GamePhase.Won : state.phase;
    }
  },
  quit(state) {
    state.boardSize = 0;
    state.board = createBoard(state.boardSize);
    state.phase = GamePhase.Setup;
  },
  setup(state, size: number) {
    state.boardSize = size;
    state.board = createBoard(size);
    state.phase = GamePhase.Playing;
  },
  reset(state) {
    state.board = createBoard(state.boardSize);
    state.phase = GamePhase.Playing;
  },
  shuffle(state) {
    state.board = createBoard(state.boardSize);
  },
};
