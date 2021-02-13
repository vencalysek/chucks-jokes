import React, {Fragment, useEffect, useState} from "react";

// redux
import {useDispatch, useSelector} from "react-redux";
import {fetchCategoriesAsync, getFetchUrl} from "../../redux/jokes/jokes.actions";

// mui
import {Grid, Button, Switch, FormControlLabel} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  switchControl: {
    padding: theme.spacing(3),
  },
}));

const JokesCategories = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
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
  const [state, setState] = useState({allowExplicit: false});
  const handleChange = event => {
    setState({...state, [event.target.name]: event.target.checked});

    // when switched to false, change fetchUrl to random and remove selected
    if (state.allowExplicit === true && selectedCategory === "explicit") {
      dispatch(getFetchUrl("random"));
      setSelectedCategory(null);
    }
  };

  // toogling categories
  const handleClick = category => {
    if (category === selectedCategory) {
      setSelectedCategory("");
      dispatchUrl("");
    } else {
      setSelectedCategory(category);
      dispatchUrl(`?category=${category}`);
    }
  };

  return (
    <Fragment>
      <FormControlLabel
        className={classes.switchControl}
        control={
          <Switch
            checked={state.allowExplicit}
            onChange={handleChange}
            name="allowExplicit"
          />
        }
        label="Allow explicit category"
      />

      <Grid container justify="center">
        {categories.map(category => (
          <Grid item key={category}>
            <Button
              disabled={(category === "explicit") & !state.allowExplicit ? true : false}
              onClick={() => handleClick(category)}
              variant={selectedCategory === category ? "outlined" : "text"}
              color={category === "explicit" ? "secondary" : "primary"}>
              {category}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default JokesCategories;
