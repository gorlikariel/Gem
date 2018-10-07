import React from 'react';
import { shallow, EnzymeAdapter, configure } from 'enzyme';
import SettingsButtons from './SettingsButtons';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
import SettingsButton from './SettingsButton/SettingsButton';
Enzyme.configure({ adapter: new Adapter() });
describe('SettingsButtons', () => {
  it('should render 4 settings buttons, the last one being the logout button which renders username based on props.username', () => {
    const username = 'Test Username';
    const settingsButtons = shallow(
      <SettingsButtons checked={true} logout={() => null} username={username} />
    );
    expect(
      settingsButtons
        .find(SettingsButton)
        .last()
        .props().children[1] === username
    );
    const tree = toJson(settingsButtons);
    expect(tree).toMatchSnapshot();
  });
});
