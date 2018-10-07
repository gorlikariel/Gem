import React from 'react';
import { EnzymeAdapter, configure, mount } from 'enzyme';
import WideButton from './WideButton';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
import { ButtonBase } from '@material-ui/core';
import { boxShadows } from '../../styleguide/theme';
Enzyme.configure({ adapter: new Adapter() });

describe('WideButton', () => {
  it(`should have a box shadow if props.noBoxShadow isn't set to true`, () => {
    const wideButton = mount(
      <WideButton bgImg="linear-gradient(red, yellow)">Test Text</WideButton>
    );
    expect(wideButton.find(ButtonBase).get(0).props.style).toHaveProperty(
      'boxShadow',
      boxShadows.wideButton
    );
  });
  it(`shouldn't have a box shadow if props.noBoxShadow is set to true`, () => {
    const wideButton = mount(
      <WideButton noBoxShadow={true} bgImg="linear-gradient(red, yellow)">
        Test Text
      </WideButton>
    );
    expect(wideButton.find(ButtonBase).get(0).props.style).toHaveProperty(
      'boxShadow',
      ''
    );
  });
});
