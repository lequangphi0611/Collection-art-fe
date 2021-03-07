import { Story, Meta } from '@storybook/react';
import { Image } from '.';
import imageSrc from '../../../stories/assets/images/soo-hyun.jpg';
import { ImageProps } from './types';

export default {
  title: 'Design System/Atoms/Image',
  component: Image,
  argTypes: {},
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: imageSrc,
  width: '',
};

export const Error = Template.bind({});
Error.args = {
  src: '/unknown.jpg',
  width: '',
  defaultImg: '',
};
