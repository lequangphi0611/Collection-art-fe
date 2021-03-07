import { shallow } from 'enzyme';
import { App } from './App';

test('renders without errors', () => {
  const app = shallow(<App />)
    .dive()
    .dive()
    .dive();
  expect(app.find('[data-test="root-app"]').exists()).toBe(true);
});
