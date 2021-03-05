import { shallow } from 'enzyme';
import defaults from 'lodash/defaults';
import { Button } from '.';
import { ButtonProps } from './types';

const setup = (props: Partial<ButtonProps> = {}) => {
  const setupProps = defaults(props, { onClick: Function, children: '' });
  return shallow(<Button {...setupProps} />);
};

describe('src/components/atoms/Button', () => {
  const clickMocker = jest.fn();

  beforeEach(() => {
    clickMocker.mockClear();
  });
  test('render without errors', () => {
    expect(setup().find('button').exists()).toBeTruthy();
  });

  test('Should call click callback When click button', () => {
    setup({ onClick: clickMocker })
      .find('button')
      .simulate('click', { target: null });
    expect(clickMocker).toHaveBeenCalledWith({ target: null });
  });

  test('Should have content When set props children', () => {
    const content = 'Button Content';
    const button = setup({ children: content }).find('button');
    expect(button.text()).toBe(content);
  });
});
