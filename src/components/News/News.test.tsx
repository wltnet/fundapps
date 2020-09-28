import React from "react";
import { shallow } from "enzyme";
import News from "./News";
import Button from "../Button";
import NewsCard from "../NewsCard";
import Dropdown from "../Dropdown";
import mockData from "../../util/mockData";

jest.mock("../../util/useFetch", () => jest.fn(() => mockData));

describe("<News />", () => {
  it("should match the snapshot", () => {
    const wrapper = shallow(<News />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should not have duplicate source in dropdown", () => {
    const source = [
      "New York Times",
      "The Wall Street Journal",
      "Teslarati",
      "CNET",
      "Yahoo Entertainment",
      "CarScoops",
      "Bloomberg",
      "CNBC",
      "CNN",
      "Associated Press",
      "WRAL.com",
      "InsideEVs ",
      "Hawaii News Now",
      "USA Today",
      "WJHL-TV News Channel 11",
    ];

    const wrapper = shallow(<News />);
    expect(wrapper.find(Dropdown).prop("list")).toEqual(source);
  });

  it("should show 5 more news after click show more button", () => {
    const wrapper = shallow(<News />);

    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.find(NewsCard).props().numberOfitemsShown).toBe(5);
    wrapper.find(Button).simulate("click");
    expect(wrapper.find(NewsCard).props().numberOfitemsShown).toBe(10);
    wrapper.find(Button).simulate("click");
    expect(wrapper.find(NewsCard).props().numberOfitemsShown).toBe(15);
  });
});
