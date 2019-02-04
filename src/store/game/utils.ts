import { GameTile } from '@/store/game';
import { randomInt } from '@/lib/utils';

export function createBoard(size: number): GameTile[][] {
  if (size === 0) {
    return [];
  }

  const board: GameTile[][] = [];
  for (let y = 0; y < size; y++) {
    const row: any[] = [];
    for (let x = 0; x < size; x++) {
      row.push({ x, y, isEmpty: false });
    }
    board.push(row);
  }

  board[size - 1][size - 1].isEmpty = true;

  let shuffled = shuffleBoard(board);
  while (isCorrectOrder(shuffled)) {
    shuffled = shuffleBoard(board);
  }
  return shuffled;
}

export function tryMove(board: GameTile[][], x: number, y: number): GameTile[][] {
  const moves = getAdjacent(x, y);

  // tslint:disable-next-line:prefer-for-of
  for (let i = 0; i < moves.length; i++) {
    const m = moves[i];
    if (isValidMove(board, x, y, m.x, m.y)) {
      return swapTile(board, x, y, m.x, m.y);
    }
  }

  return board;
}

export function swapTile(board: GameTile[][], x1: number, y1: number, x2: number, y2: number): GameTile[][] {
  const t1 = board[y1][x1];
  const t2 = board[y2][x2];

  return board
    .map((r, y) => r
      .map((c, x) => {
        if (x === x1 && y === y1) {
          return t2;
        }
        if (x === x2 && y === y2) {
          return t1;
        }
        return c;
      }));
}

export function isCorrectOrder(board: GameTile[][]) {
  const size = board.length;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (x === y && x === (size - 1)) {
        continue;
      }

      const tile = board[y][x];
      if (tile.x !== x || tile.y !== y) {
        return false;
      }
    }
  }
  return true;
}

function getAdjacent(x: number, y: number): { x: number, y: number }[] {
  return [
    { x, y: y - 1 },
    { x, y: y + 1 },
    { x: x - 1, y },
    { x: x + 1, y },
  ];
}

function isValidMove(board: GameTile[][], fromX: number, fromY: number, toX: number, toY: number): boolean {
  const size = board.length;
  const row = board[toY];
  if (!row) {
    return false;
  }
  const tile = row[toX];
  if (!tile || !tile.isEmpty) {
    return false;
  }
  if (fromX < 0 || fromY < 0 || toX < 0 || toY < 0 ||
    fromX >= size || fromY >= size || toX >= size || toY >= size) {
    return false;
  }
  const distance = Math.abs(fromX - toX) + Math.abs(fromY - toY);
  if (distance !== 1) {
    return false;
  }

  return true;
}

function shuffleBoard(board: GameTile[][]): GameTile[][] {
  const size = board.length;

  let holeX = -1;
  let holeY = -1;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const tile = board[y][x];
      if (tile.isEmpty) {
        holeX = x;
        holeY = y;
      }
    }
  }

  if (holeX === -1 || holeY === -1) {
    return board;
  }

  const iterations = getShuffleIterations(size);
  let shuffled = board;
  for (let i = 0; i < iterations; i++) {
    const validMoves = getAdjacent(holeX, holeY)
      .filter((m) => isValidMove(shuffled, m.x, m.y, holeX, holeY));
    const move = validMoves[randomInt(validMoves.length)];

    shuffled = tryMove(shuffled, move.x, move.y);
    holeX = move.x;
    holeY = move.y;
  }
  return shuffled;
}

function getShuffleIterations(boardSize: number): number {
  const iterationsBase = 100;
  const iterationsMultipler = Math.pow(2, boardSize);
  return iterationsBase * iterationsMultipler;
}
