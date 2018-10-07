import React from 'react';
import { mount, EnzymeAdapter, configure } from 'enzyme';
import { MainButton } from './MainButton';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
import { ButtonBase } from '@material-ui/core';
import { boxShadows } from '../../styleguide/theme';
Enzyme.configure({ adapter: new Adapter() });

describe('MainButton ', () => {
  let wideButton = mount(
    <MainButton
      onClick={() => null}
      loading={false}
      hour="22:00"
      taken={false}
    />
  );

  it(`should display 'TAKE PILL' if taken is set to false`, () => {
    expect(wideButton.text()).toContain('TAKE PILL');
  });
  it('should display the correct hour passed through props.hour', () => {
    expect(wideButton.text()).toContain('22:00');
  });
  it(`should display the correct streak passed through props.streak`, () => {
    expect(wideButton.text()).toContain(`⚡0`);
  });
  it(`should display 'PILL TAKEN' if taken is set to false`, () => {
    wideButton.setProps({ taken: true });
    expect(wideButton.text()).toContain('PILL TAKEN');
  });
});
