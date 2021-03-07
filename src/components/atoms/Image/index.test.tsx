import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { Image, ImageProps } from '.';

const setup = (props: ImageProps = { src: '' }) => mount(<Image {...props} />);

jest.mock('../../../assets/images/default-img.jpg', () => 'default.png');

describe('src/components/atoms/Image', () => {
  test('Render without errors', () => {
    expect(setup().find('img')).toHaveLength(1);
  });

  test('Should set src in img tag When set props src into component', () => {
    expect(setup({ src: 'image.jpg' }).find('img')).toHaveLength(1);
  });

  test('Should set src is default img When error event be trigger', async () => {
    const wrapper = setup({ src: 'failt' });
    const img = wrapper.find('img');
    await act(async () => {
      img.simulate('error');
    });
    wrapper.update();

    expect(wrapper.find('img').props().src).toBe('default.png');
  });
});
