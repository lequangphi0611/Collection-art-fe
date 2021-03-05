import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '.';

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {
      action: 'clicked',
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Btn',
};
