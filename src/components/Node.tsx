import { cva, type VariantProps } from 'class-variance-authority';

const nodeVariants = cva('w-6 h-6 outline-1 inline-block', {
  variants: {
    variant: {
      default: 'bg-white',
      finish: 'bg-green-600',
      start: 'bg-red-600',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type NodeProps = VariantProps<typeof nodeVariants>;

export function Node({ variant }: NodeProps) {
  return <div className={nodeVariants({ variant })} />;
}
