import { mount } from 'enzyme';
import defaults from 'lodash/defaults';
import { Button, ButtonProps } from '.';

const setup = (props: Partial<ButtonProps> = {}) => {
  const setupProps = defaults(props, { onClick: Function, children: '' });
  return mount(<Button {...setupProps} />);
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
    setup({ onClick: clickMocker }).find('button').simulate('click');
    expect(clickMocker).toBeCalledTimes(1);
  });

  test('Should have content When set props children', () => {
    const content = 'Button Content';
    const button = setup({ children: content }).find('button');
    expect(button.text()).toBe(content);
  });

  test('Not clickable when set disabled equal true', () => {
    setup({ disabled: true, onClick: clickMocker })
      .find('button')
      .simulate('click');
    expect(clickMocker).not.toHaveBeenCalled();
  });
});
