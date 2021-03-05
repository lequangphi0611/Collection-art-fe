import { ReactWrapper, ShallowWrapper } from "enzyme";

export default (wrapper: ShallowWrapper | ReactWrapper, dataTest: string): ShallowWrapper | ReactWrapper => {
    return wrapper.find(`[data-test="${dataTest}"]`);
}