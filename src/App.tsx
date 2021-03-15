import { setupThemeContext } from './hocs/themes';
import { Image } from './components/atoms/Image';
import src from './stories/assets/images/soo-hyun.jpg';

const BaseApp: React.FC = () => (
  <div data-test="root-app">
    <Image src={src /*  */} />
  </div>
);

export const App = setupThemeContext(BaseApp);
