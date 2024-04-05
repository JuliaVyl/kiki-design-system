import { VariantProps, cva } from 'class-variance-authority';
import { clsx } from '../utils';

const buttonVariants = cva(['text-white-100', 'px-2', 'rounded-md'], {
  variants: {
    variant: {
      primary: [
        'bg-light-button-primary-default',
        'dark:bg-dark-button-primary-default',
      ],
      secondary: ['bg-black-100', 'dark:bg-white-100', 'dark:text-black-100'],
    },
    size: {
      xs: ['py-0'],
      s: ['py-1'],
      m: ['py-2', 'px-4'],
      l: ['py-3', 'px-4'],
      xl: ['py-4', 'px-5'],
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 's',
  },
});

export interface ButtonVariants extends VariantProps<typeof buttonVariants> {}

export const buttonStyle = (variants: ButtonVariants) =>
  clsx(buttonVariants(variants));
