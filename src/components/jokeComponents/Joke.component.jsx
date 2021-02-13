import React, {useEffect, Fragment} from "react";

// redux
import {useDispatch, useSelector} from "react-redux";
import {fetchJokeAsync} from "../../redux/jokes/jokes.actions";

// mui
import {Button, Container, Paper, Typography} from "@material-ui/core/";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    margin: "0 auto",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    maxWidth: "30em",
    textOverflow: "ellipsis",
    overflow: "hidden",
    position: "relative",
  },

  jokeContent: {
    padding: theme.spacing(2),
  },

  categoryCaption: {
    position: "absolute",
    right: theme.spacing(1),
    bottom: theme.spacing(1),
    fontStyle: "italic",
  },

  button: {
    maxWidth: "max-content",
    margin: theme.spacing(3),
  },
}));

const Joke = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const joke = useSelector(state => state.jokes.joke);
  const fetchUrl = useSelector(state => state.jokes.fetchUrl);
  const isLoaded = useSelector(state => state.jokes.isLoaded);
  const searchQuery = useSelector(state => state.jokes.searchQuery);

  /**
   * random joke vs search joke logic?
   * response from api is different
   * 1. store full object into redux and make separate components for random joke and searched joke, destructuring data inside components
   *
   * or
   *
   * 2. make separete redux actions for random and search, all logic will be inside redux, one component to render joke content.
   * --------------------------------
   * 1. fetch random joke
   *    - useEffect, dependency is url, will only change when categories are selected
   *    - dispatch api call func
   *
   * 2. search for joke
   *    - form
   *    - dispatch second api call func
   */

  useEffect(() => {
    dispatch(fetchJokeAsync(fetchUrl));
  }, [dispatch, fetchUrl]);

  return (
    <Container>
      {/* if loaded show joke content */}
      {isLoaded && (
        <Fragment>
          <Paper variant="outlined" className={classes.paper}>
            
            {/* if joke exist show content, if joke doesnt exist -> query wasn't found */}
            {joke ? (
              <Container>

                {/* joke content */}
                <Typography variant="subtitle1" className={classes.jokeContent}>
                  {joke.value}
                </Typography>

                {/* joke category */}
                <Typography variant="caption" className={classes.categoryCaption}>
                  {joke.categories.length ? (
                    <span>"{joke.categories[0]}"</span>
                  ) : (
                    <span>"random"</span>
                  )}
                </Typography>
              </Container>
            ) : (
              <span>Can't find joke containing: "{searchQuery}"</span>
            )}
          </Paper>

          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
            onClick={() => {
              dispatch(fetchJokeAsync(fetchUrl));
            }}>
            Kick me another one!
          </Button>
        </Fragment>
      )}
    </Container>
  );
};

export default Joke;
