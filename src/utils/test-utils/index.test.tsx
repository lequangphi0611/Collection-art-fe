import { shallow, mount } from 'enzyme';
import { findByDataTest } from '.';

describe('utils/test-utils', () => {
  describe('findByDataTest', () => {
    const element = (
      <div>
        <p data-test="test-id">paragraph</p>
      </div>
    );
    test('Should return ShallowWrapperObject', () => {
      const wrapper = shallow(element);
      const actual = findByDataTest(wrapper, 'test-id');
      expect(
        actual.matchesElement(<p data-test="test-id">paragraph</p>),
      ).toBeTruthy();
    });

    test('Should return ReactWrapperObject', () => {
      const wrapper = mount(element);
      const actual = findByDataTest(wrapper, 'test-id');
      expect(
        actual.matchesElement(<p data-test="test-id">paragraph</p>),
      ).toBeTruthy();
    });

    test('Should can not find with data-test attr not found', () => {
      const wrapper = shallow(element);
      const actual = findByDataTest(wrapper, 'unknown');
      expect(actual.exists()).toBeFalsy();
    });
  });
});
