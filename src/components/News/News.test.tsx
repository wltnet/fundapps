import React from "react";
import { shallow } from "enzyme";
import News from "./News";

describe("<News />", () => {
  it("should match the snapshot", () => {
    const wrapper = shallow(<News />);

    expect(wrapper).toMatchSnapshot();
  });
});
