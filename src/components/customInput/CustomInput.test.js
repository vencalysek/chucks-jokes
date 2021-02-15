import React from "react";
import {shallow} from "enzyme";

import CustomInput from "./CustomInput";

it("expect to render CustomInput component", () => {

  expect(shallow(<CustomInput />)).toMatchSnapshot();
});
