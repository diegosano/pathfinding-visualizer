import { useCallback, useEffect, useState } from 'react';

import { Node } from './Node';
import { Grid, Node as INode } from '../types';
import { createNode, getNewGridWithWallToggled } from '../utils';

export function Pathfinding() {
  const [grid, setGrid] = useState<Grid>([]);
  const [mouseIsPressed, setMouseIsPressed] = useState(false);

  useEffect(() => {
    const newGrid: Grid = [];

    for (let row = 0; row < 20; row++) {
      const currentRow: INode[] = [];

      for (let col = 0; col < 50; col++) {
        currentRow.push(createNode(col, row));
      }

      newGrid.push(currentRow);
    }

    setGrid(newGrid);
  }, []);

  const handleMouseDown = useCallback(
    (row: number, col: number) => {
      const newGrid = getNewGridWithWallToggled(grid, row, col);
      setGrid(newGrid);
      setMouseIsPressed(true);
    },
    [grid]
  );

  const handleMouseEnter = useCallback(
    (row: number, col: number) => {
      if (!mouseIsPressed) {
        return;
      }

      const newGrid = getNewGridWithWallToggled(grid, row, col);
      setGrid(newGrid);
    },
    [grid, mouseIsPressed]
  );

  const handleMouseUp = useCallback(() => {
    setMouseIsPressed(false);
  }, []);

  return (
    <div>
      {grid.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="flex">
            {row.map((node, nodeIndex) => {
              return (
                <Node
                  key={nodeIndex}
                  col={node.col}
                  row={node.row}
                  variant={node.variant}
                  onMouseDown={handleMouseDown}
                  onMouseEnter={handleMouseEnter}
                  onMouseUp={handleMouseUp}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
