import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '.';
import { setupThemeContext } from '../../../hocs/themes';

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
    primary: {
      control: 'boolean',
    },
  },
} as Meta;

const ButtonWithThemeContext = setupThemeContext(Button);

const Template: Story<ButtonProps> = (args) => (
  <ButtonWithThemeContext {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Default Btn',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Btn',
  primary: true,
};

export const DisabledDefault = Template.bind({});
DisabledDefault.args = {
  children: 'Disabled Default Btn',
  disabled: true,
};

export const DisabledPrimary = Template.bind({});
DisabledPrimary.args = {
  children: 'Disabled Primary Btn',
  primary: true,
  disabled: true,
};
