import * as React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Settings from "./Settings";
import BasicButton from "../../UI/BasicButton/BasicButton";
configure({ adapter: new Adapter() });

describe("<Settings/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Settings />);
  });

  it("should render two BasicButtons", () => {
    expect(wrapper.find(BasicButton)).toHaveLength(4);
  });

  //   it("should render three Navigation Items if logged in", () => {
  //     wrapper.setProps({ isAuth: true });
  //     expect(wrapper.find(NavigationItem)).toHaveLength(3);
  //   });

  //   it("should render logout Navigation Items if logged in", () => {
  //     wrapper.setProps({ isAuth: true });
  //     expect(
  //       wrapper.contains(
  //         <NavigationItem exact link="/logout">
  //           Logout
  //         </NavigationItem>
  //       )
  //     ).toEqual(true);
  //   });
});
