import React from 'react';
import { App } from './App';
import { shallow, configure } from 'enzyme';

test('renders without errors', () => {
  const app = shallow(<App />);
  expect(app.find('[data-test="root-app"]').exists()).toBe(true);
});
