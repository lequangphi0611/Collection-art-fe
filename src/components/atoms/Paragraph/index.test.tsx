import { shallow } from 'enzyme';
import defaults from 'lodash/defaults';
import { Paragraph, ParagraphProps } from '.';
import { findByDataTest } from '../../../utils/test-utils';

const setup = (props: Partial<ParagraphProps> = {}) => {
  const setupProps = defaults(props, { children: '' });
  return shallow(<Paragraph {...setupProps} />);
};

describe('components/atoms/Paragraph', () => {
  test('renders without errors', () => {
    expect(findByDataTest(setup(), 'component-paragraph').exists()).toBe(true);
  });

  test('Should render p tag', () => {
    const wrapper = setup().dive();
    expect(wrapper.find('p').exists()).toBe(true);
  });

  test('Should have text with set children props', () => {
    const PARAGRAPH_CONTENT = 'content';
    expect(setup({ children: PARAGRAPH_CONTENT }).text()).toBe(
      PARAGRAPH_CONTENT
    );
  });
});
