import React from 'react';
import { shallow, EnzymeAdapter, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
import ConfirmationDialog from './ConfirmationDialog';
import { Button } from '@material-ui/core';
Enzyme.configure({ adapter: new Adapter() });

describe('ConfirmationDialog', () => {
  const onAgreeMock = jest.fn();
  const onDisagreeMock = jest.fn();

  const confirmationDialog = shallow(
    <ConfirmationDialog
      open={true}
      onAgree={onAgreeMock}
      onClose={onDisagreeMock}
      message="Test Message?"
    />
  );
  it(`should fire props.onDisagree when 'DISAGREE' is clicked`, () => {
    confirmationDialog
      .find(Button)
      .first()
      .simulate('click');
    expect(onDisagreeMock).toHaveBeenCalled();
  });
  it(`should fire props.onAgree when 'AGREE' is clicked`, () => {
    confirmationDialog
      .find(Button)
      .last()
      .simulate('click');
    expect(onAgreeMock).toHaveBeenCalled();
  });
});
