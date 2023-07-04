import { cva } from 'class-variance-authority';
import { memo } from 'react';

import type { Node as INode } from '../types';

export const nodeVariants = cva(
  'w-6 h-6 outline-1 outline outline-black inline-block outline-offset-0',
  {
    variants: {
      variant: {
        default: 'bg-white',
        finish: 'bg-green-600',
        start: 'bg-red-600',
        wall: 'bg-slate-800',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface NodeProps extends Omit<INode, 'isWall'> {
  onMouseDown: (col: number, row: number) => void;
  onMouseEnter: (col: number, row: number) => void;
  onMouseUp: () => void;
}

export const Node = memo(
  ({ variant, row, col, onMouseDown, onMouseEnter, onMouseUp }: NodeProps) => {
    return (
      <div
        id={`node-${row}-${col}`}
        className={nodeVariants({ variant })}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseEnter={() => onMouseEnter(row, col)}
        onMouseUp={() => onMouseUp()}
      />
    );
  }
);
