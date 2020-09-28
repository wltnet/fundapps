import React from "react";
import { shallow } from "enzyme";
import NewsCard from "./NewsCard";
import mockData from "../../util/mockData";

jest.mock("./styled", () => ({
  List: "List",
  Date: "Date",
  Source: "Source",
  Title: "Title",
}));

const props = {
  data: mockData.data.articles,
  numberOfitemsShown: 5,
};

describe("<NewsCard />", () => {
  it("should match the snapshot", () => {
    const wrapper = shallow(<NewsCard {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should show 2 articles when numberOfitemsShown set to 2", () => {
    props.numberOfitemsShown = 2;
    const wrapper = shallow(<NewsCard {...props} />);
    expect(wrapper.find("List")).toHaveLength(2);
  });
  it("should show 10 articles when numberOfitemsShown set to 10", () => {
    props.numberOfitemsShown = 10;
    const wrapper = shallow(<NewsCard {...props} />);
    expect(wrapper.find("List")).toHaveLength(10);
  });
});
