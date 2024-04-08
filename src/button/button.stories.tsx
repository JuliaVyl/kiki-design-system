import type { Meta, StoryFn } from '@storybook/react';

import { Button } from './button';
import { ReactElement } from 'react';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    size: {
      options: ['xs', 's', 'm', 'l', 'xl'],
      control: { type: 'radio' },
    },
    disabled: {
      control: 'boolean',
    },
  },
};
export default meta;

export const Primary: StoryFn<typeof Button> = (args): ReactElement => {
  return <Button {...args}>Primary</Button>;
};
Primary.args = {
  variant: 'primary',
  disabled: false,
  size: 's',
};

export const Secondary: StoryFn<typeof Button> = (args): ReactElement => {
  return <Button {...args}>Secondary</Button>;
};
Secondary.args = {
  variant: 'secondary',
  disabled: false,
  size: 's',
};

export const PrimaryDisabled: StoryFn<typeof Button> = (args): ReactElement => {
  return <Button {...args}>Primary</Button>;
};
PrimaryDisabled.args = {
  variant: 'primary',
  disabled: true,
  size: 's',
};

export const SecondaryDisabled: StoryFn<typeof Button> = (
  args
): ReactElement => {
  return <Button {...args}>Secondary</Button>;
};
SecondaryDisabled.args = {
  variant: 'secondary',
  disabled: true,
  size: 's',
};

export const ExtraSmallSize: StoryFn<typeof Button> = (args): ReactElement => {
  return <Button {...args}>Primary</Button>;
};

ExtraSmallSize.args = {
  variant: 'primary',
  disabled: false,
  size: 'xs',
};

export const SmallSize: StoryFn<typeof Button> = (args): ReactElement => {
  return <Button {...args}>Primary</Button>;
};
SmallSize.args = {
  variant: 'primary',
  disabled: false,
  size: 's',
};

export const MediumSize: StoryFn<typeof Button> = (args): ReactElement => {
  return <Button {...args}>Primary</Button>;
};
MediumSize.args = {
  variant: 'primary',
  disabled: false,
  size: 'm',
};

export const LargeSize: StoryFn<typeof Button> = (args): ReactElement => {
  return <Button {...args}>Primary</Button>;
};
LargeSize.args = {
  variant: 'primary',
  disabled: false,
  size: 'l',
};

export const ExtraLargeSize: StoryFn<typeof Button> = (args): ReactElement => {
  return <Button {...args}>Primary</Button>;
};
ExtraLargeSize.args = {
  variant: 'primary',
  disabled: false,
  size: 'xl',
};
