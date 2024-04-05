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
  },
};
export default meta;

export const Primary: StoryFn<typeof Button> = (args): ReactElement => {
  return <Button {...args}>Button</Button>;
};
Primary.args = {
  variant: 'primary',
};
