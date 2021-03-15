import { Story, Meta } from '@storybook/react';
import { Image } from '.';
import imageSrc from '../../../stories/assets/images/soo-hyun.jpg';
import { ImageProps } from './types';

export default ({
  title: 'Design System/Atoms/Image',
  component: Image,
  argTypes: {},
} as unknown) as Meta;

const DEFAULT_PROPS = { width: '300px', height: 'auto', defaultImg: '' };

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...DEFAULT_PROPS,
  src: imageSrc,
};

export const Error = Template.bind({});
Error.args = {
  ...DEFAULT_PROPS,
  src: '/unknown.jpg',
};
