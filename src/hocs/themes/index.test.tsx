import { mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { applyThemeMiddleWare, setupThemeContext } from '.';
import themeConfig from './theme.config';

describe('hocs/themes', () => {
  type ComponentType = Partial<{
    primary: boolean;
    disabled: boolean;
    content: string;
  }>;
  const Component: React.FC<ComponentType> = () => <div />;
  describe('setupThemeContext', () => {
    const ComponentWithThemeContext = setupThemeContext(Component);
    test('Should return React component', () => {
      const wrapper = shallow(<ComponentWithThemeContext />);
      expect(wrapper.find(Component).length).toBe(1);
    });
    test('Should wrap with Theme provider', () => {
      const themeProvider = shallow(<ComponentWithThemeContext />).find(
        ThemeProvider,
      );
      expect(themeProvider.length).toBe(1);
      expect(themeProvider.dive().find(Component)).toHaveLength(1);
    });

    test('Should set props for Component', () => {
      const component = shallow(
        <ComponentWithThemeContext disabled content="this is content !" />,
      ).find(Component);
      expect(component.props()).toStrictEqual({
        disabled: true,
        content: 'this is content !',
      });
    });

    test('Should config theme equal theme.config module', async () => {
      const { theme } = shallow(<ComponentWithThemeContext />)
        .find(ThemeProvider)
        .props();
      expect(theme).toStrictEqual(themeConfig);
    });
  });

  describe('applyMiddlewareTheme', () => {
    const themeValue = { text: { fontSize: '16' } };

    const middleWareFunction = jest.fn();
    const ComponentWithThemeMiddleWare = applyThemeMiddleWare(
      middleWareFunction,
      Component,
    );

    const ComponentWithThemeContext = (props: ComponentType) => (
      <ThemeProvider theme={themeValue}>
        <ComponentWithThemeMiddleWare {...props} />
      </ThemeProvider>
    );

    beforeEach(() => {
      middleWareFunction.mockClear();
    });
    test('Should return React component', () => {
      const wrapper = mount(<ComponentWithThemeContext />);
      expect(wrapper.find(Component).length).toBe(1);
    });

    test('Should call middle ware function When render component', () => {
      mount(<ComponentWithThemeContext primary disabled />);
      expect(middleWareFunction).toHaveBeenCalledWith(themeValue, {
        primary: true,
        disabled: true,
      });
    });

    test('Should combine props and pass the component', () => {
      middleWareFunction.mockImplementation(() => ({ fontSize: '16' }));
      const wrapper = mount(<ComponentWithThemeContext primary disabled />);
      expect(wrapper.find(Component).props()).toStrictEqual({
        primary: true,
        disabled: true,
        fontSize: '16',
      });
    });
  });
});
