import React from "react";
import {shallow} from "enzyme";

import JokeCategory from "./JokeCategory";

it("expect to render jokeCategory component", () => {
  expect(shallow(<JokeCategory />)).toMatchSnapshot();
});
