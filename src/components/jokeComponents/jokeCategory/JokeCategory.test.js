import React from "react";
import {shallow} from "enzyme";

import JokeCategory from "./JokeCategory";

it("correctly render category name", () => {
  const mockCategory = 'random'
  const wrapper = shallow(<JokeCategory category={mockCategory} />)
  expect(wrapper.text()).toEqual('random')
});

it("explicit button is initially disabled", () => {
  const wrapper = shallow(<JokeCategory category='explicit' />)
  expect(wrapper.props().disabled).toBeTruthy()
});

it("explicit button have right color", () => {
  const wrapper = shallow(<JokeCategory category='explicit' />)
  expect(wrapper.props().color).toEqual('secondary')
});
