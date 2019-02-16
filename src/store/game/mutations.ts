import { MutationTree } from 'vuex';

import { GameState, GamePhase } from './game';
import { createBoard, tryMove, isCorrectOrder } from './utils';

export const mutations: MutationTree<GameState> = {
  moveTile(state, { x, y }: { x: number, y: number }) {
    if (state.phase === GamePhase.Playing) {
      state.board = tryMove(state.board, x, y);
      state.phase = isCorrectOrder(state.board) ? GamePhase.Won : state.phase;
    }
  },
  quit(state) {
    state.boardSize = 0;
    state.board = createBoard(0);
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
