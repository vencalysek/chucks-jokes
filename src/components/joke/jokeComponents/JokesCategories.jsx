import React, {Fragment, useEffect, useState} from "react";
import JokeCategory from "./JokeCategory";

// redux
import {useDispatch, useSelector} from "react-redux";
import {fetchCategoriesAsync, getFetchUrl} from "../../../redux/jokes/jokes.actions";

// mui
import {Grid, Switch, FormControlLabel} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  switchControl: {
    padding: theme.spacing(3),
  },
}));

const JokesCategories = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [allowExplicit, setAllowExplicit] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  // take data from redux
  const categories = useSelector(state => state.jokes.categories);

  // fetch categories
  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  // change url in redux for api call
  const dispatchUrl = url => {
    dispatch(getFetchUrl(`random${url}`));
  };

  // switch to allow explicit jokes
  const handleChange = () => {
    setAllowExplicit(!allowExplicit);

    // when switched to false, change fetchUrl to random and remove selected
    if (allowExplicit === true && selectedCategory === "explicit") {
      dispatchUrl("");
      setSelectedCategory("");
    }
  };

  const getSelectedCategory = category => {
    setSelectedCategory(category);
  };

  return (
    <Fragment>
      <FormControlLabel
        className={classes.switchControl}
        control={
          <Switch checked={allowExplicit} onChange={handleChange} name="allowExplicit" />
        }
        label="Allow explicit category"
      />

      <Grid container justify="center">
        {categories.map(category => (
          <JokeCategory
            key={category}
            category={category}
            selected={selectedCategory === category}
            dispatchUrl={dispatchUrl}
            allowExplicit={allowExplicit}
            getSelectedCategory={getSelectedCategory}
          />
        ))}
      </Grid>
    </Fragment>
  );
};

export default JokesCategories;
