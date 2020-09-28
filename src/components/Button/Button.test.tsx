import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

jest.mock("./styled", () => ({ Wrapper: "Wrapper" }));

describe("<Button />", () => {
  it("should match the snapshot", () => {
    const props = {
      title: "Show more",
      onClick: jest.fn(),
    };
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
