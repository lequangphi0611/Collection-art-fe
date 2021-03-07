import { ReactWrapper, ShallowWrapper } from 'enzyme';

export default (wrapper: ShallowWrapper | ReactWrapper, dataTest: string): ShallowWrapper | ReactWrapper => wrapper.find(`[data-test="${dataTest}"]`);
