import { MutationTree } from 'vuex';

import { GameState } from './game';
import { createBoard, tryMove, isCorrectOrder } from './utils';

export const mutations: MutationTree<GameState> = {
  moveTile(state, { x, y }: { x: number, y: number }) {
    state.board = tryMove(state.board, x, y);
    state.isWon = isCorrectOrder(state.board);
  },
  resize(state, size: number) {
    state.boardSize = size;
    state.board = createBoard(size);
    state.isWon = isCorrectOrder(state.board);
  },
  reset(state) {
    state.board = createBoard(state.boardSize);
    state.isWon = isCorrectOrder(state.board);
  },
};
