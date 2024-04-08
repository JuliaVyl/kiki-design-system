import { cva } from 'class-variance-authority';
import { clsx } from '../utils';

const buttonVariants = cva(
  [
    'text-white-100',
    'px-2',
    'rounded-md',
    'border',
    'border-solid',
    'text-base',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-light-button-primary-default',
          'dark:bg-dark-button-primary-default',
          'border-0',
          'hover:bg-light-button-primary-hover',
          'dark:hover:bg-dark-button-primary-hover',
        ],
        secondary: [
          'bg-light-button-secondary-default',
          'text-light-button-secondary-text-default',
          'border-light-button-secondary-border-default',
          'dark:bg-dark-button-secondary-default',
          'dark:text-dark-button-secondary-text-default',
          'dark:border-dark-button-secondary-border-default',
          'hover:bg-light-button-secondary-hover',
          'hover:border-light-button-secondary-border-hover',
          'dark:hover:bg-dark-button-secondary-hover',
          'dark:hover:border-dark-button-secondary-border-hover',
        ],
      },
      size: {
        xs: ['py-0', 'text-sm'],
        s: ['py-1'],
        m: ['py-2', 'px-4'],
        l: ['py-3', 'px-4'],
        xl: ['py-4', 'px-5'],
      },
      disabled: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        disabled: true,
        class: [
          'disabled:bg-light-button-primary-disabled',
          'disabled:dark:bg-dark-button-primary-disabled',
          'disabled:dark:text-light-color-grey-60',
        ],
      },
      {
        variant: 'secondary',
        disabled: true,
        class: [
          'disabled:bg-light-button-secondary-disabled',
          'disabled:dark:bg-dark-button-secondary-disabled',
          'disabled:border-light-button-secondary-border-disabled',
          'disabled:dark:border-dark-button-secondary-border-disabled',
          'disabled:text-light-button-secondary-text-disabled',
          'disabled:dark:text-dark-button-secondary-text-disabled',
        ],
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 's',
    },
  }
);

export const buttonStyle = (variants: Parameters<typeof buttonVariants>[0]) =>
  clsx(buttonVariants(variants));
