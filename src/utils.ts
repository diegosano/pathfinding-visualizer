import { Grid } from "./types";

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

export function getNodeVariant(col: number, row: number, isWall = false) {
  if (isWall) {
    return 'wall' as const;
  } else if (row === START_NODE_ROW && col === START_NODE_COL) {
    return 'start' as const;
  } else if (row === FINISH_NODE_ROW && col === FINISH_NODE_COL) {
    return 'finish' as const;
  } else {
    return 'default' as const;
  }
}

export function createNode(col: number, row: number) {
  const variant = getNodeVariant(col, row);

  return {
    col,
    row,
    variant,
    isWall: false,
  };
}

export function getNewGridWithWallToggled(grid: Grid, row: number, col: number) {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const variant = getNodeVariant(col, row, !node.isWall);
  const newNode = {
    ...node,
    variant,
    isWall: !node.isWall,
  };
  newGrid[row][col] = newNode;
  return newGrid;
}