import { VariantProps } from "class-variance-authority";

import { nodeVariants } from "./components/Node";

export interface Node extends VariantProps<typeof nodeVariants> {
  col: number;
  row: number;
  isWall: boolean;
}
export type Grid = Node[][];