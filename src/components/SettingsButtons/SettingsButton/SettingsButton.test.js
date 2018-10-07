import React from 'react';
import { shallow, EnzymeAdapter, configure } from 'enzyme';
import SettingsButton from './SettingsButton';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
Enzyme.configure({ adapter: new Adapter() });
test('settings button should render text as expected', () => {
  const settingsButton = shallow(
    <SettingsButton to="someWhere" bgImg="red" color="red">
      Test Text
    </SettingsButton>
  );
  const tree = toJson(settingsButton);
  expect(tree).toMatchSnapshot();
});
