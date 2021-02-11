import React, {useEffect, useState} from "react";

// redux
import {useDispatch, useSelector} from "react-redux";
import {
  selectCategory,
  fetchCategoriesAsync,
  getFetchUrl,
} from "../../redux/jokes/jokes.actions";

// mui
import {Grid, Button, Switch, FormControlLabel} from "@material-ui/core";
// import {makeStyles} from "@material-ui/core/styles";

const JokesCategories = () => {
  const dispatch = useDispatch();

  // take data from redux
  const categories = useSelector(state => state.jokes.categories);
  const selectedCategory = useSelector(state => state.jokes.selectedCategory);

  // fetch categories
  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  // change url for api call
  const dispatchUrl = category => {
    dispatch(getFetchUrl(`?category=${category}`));
  };

  // dispatch category
  const dispatchCategory = category => {
    dispatch(selectCategory(category));
  };

  // switch to allow explicit jokes
  const [state, setState] = useState({allowExplicit: false});
  console.log("state", state);
  const handleChange = event => {
    setState({...state, [event.target.name]: event.target.checked});
    
    // when switched to false, change fetchUrl to random and remove selected
    if (state.allowExplicit === true && selectedCategory === 'explicit') {
      dispatch(getFetchUrl(''))
      dispatch(selectCategory(null))
    }
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Switch
            checked={state.allowExplicit}
            onChange={handleChange}
            name="allowExplicit"
          />
        }
        label="Allow explicit content"
      />

      <Grid container justify="center">
        {categories.map(category => (
          <Grid item key={category}>
            <Button
              disabled={(category === "explicit") & !state.allowExplicit ? true : false}
              onClick={() => {
                return (dispatchCategory(category), dispatchUrl(category));
              }}
              variant={selectedCategory === category ? "contained" : "text"}
              color={category === "explicit" ? "secondary" : "primary"}>
              {category}
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default JokesCategories;
