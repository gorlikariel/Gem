import React from 'react';
import { shallow, EnzymeAdapter, configure } from 'enzyme';
// import { TopNavigation } from './TopNavigation';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { StaticRouter } from 'react-router';
import { Settings } from '../../containers/Settings/Settings';
Enzyme.configure({ adapter: new Adapter() });

describe('TopNavigation ', () => {
  it('should ', () => {
    const mockClickBack = jest.fn();
    const mockSubmit = jest.fn();
    shallow(
      // <StaticRouter basename="/">
      <Settings
      // title="Test Title"
      // showLeftArrow={false}
      // showSubmit={false}
      // showSettingsButton={false}
      // backOnClick={null}
      // onSubmit={null}
      />
      // </StaticRouter>
    );
    console.log('dickdick baby');
    // console.log(TopNavigation.text());
  });
});
