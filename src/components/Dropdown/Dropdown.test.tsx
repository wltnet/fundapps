import React from "react";
import { shallow } from "enzyme";
import Dropdown from "./Dropdown";

describe("<Dropdown />", () => {
  it("should match the snapshot", () => {
    const props = {
      list: ["CNN", "BBC"],
      onChange: jest.fn(),
    };
    const wrapper = shallow(<Dropdown {...props} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("option").at(1).text()).toBe("BBC");
    expect(wrapper.find("option").at(2).text()).toBe("CNN");
  });
});
