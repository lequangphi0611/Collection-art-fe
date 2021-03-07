import { setupThemeContext } from './hocs/themes';

const BaseApp: React.FC = () => <div data-test="root-app" />;

export const App = setupThemeContext(BaseApp);
