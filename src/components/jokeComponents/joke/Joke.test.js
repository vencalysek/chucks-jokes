import React from "react";
import {shallow} from "enzyme";

import Joke from "./Joke";

it("expect to render Joke component", async () => {
  const mockJokes = [
    {
      jokeContent: "Some funny joke about Chuck Norris",
      jokeCategory: ["random"],
    },
  ];

  expect(await shallow(<Joke joke={mockJokes} />)).toMatchSnapshot();
});
