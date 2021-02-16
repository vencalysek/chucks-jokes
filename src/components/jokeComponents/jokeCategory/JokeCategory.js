import React from "react";

// mui
import {Button} from "@material-ui/core";

const JokeCategory = ({
  category,
  allowExplicit,
  dispatchUrl,
  getSelectedCategory,
  selected,
}) => {
  
  // toogling categories
  const handleClick = category => {
    if (selected) {
      getSelectedCategory("");
      dispatchUrl("");
    } else {
      getSelectedCategory(category);
      dispatchUrl(`?category=${category}`);
    }
  };

  return (
    <Button
      disabled={(category === "explicit") & !allowExplicit ? true : false}
      onClick={() => handleClick(category)}
      variant={selected ? "outlined" : "text"}
      color={category === "explicit" ? "secondary" : "primary"}>
      {category}
    </Button>
  );
};

export default JokeCategory;
