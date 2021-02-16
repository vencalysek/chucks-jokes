import React, {useEffect, Fragment} from "react";
import Joke from "../../jokeComponents/joke/Joke";
import ChuckImg from "../../../images/chuck_norris.png";

// redux
import {useDispatch, useSelector} from "react-redux";
import {fetchJokeAsync} from "../../../redux/jokes/jokes.actions";

// mui
import {Container, Paper, Fade, IconButton} from "@material-ui/core/";
import {makeStyles} from "@material-ui/core/styles";
import RefreshIcon from "@material-ui/icons/Refresh";

const useStyles = makeStyles(theme => ({
  jokeWrapper: {
    position: "relative",
  },
  paper: {
    padding: (theme.spacing(2), theme.spacing(3)),
    color: theme.palette.text.secondary,
    minHeight: "2.5em",
    textOverflow: "ellipsis",
  },
  contentPadding: {
    padding: theme.spacing(2),
  },
  chuckImgStyle: {
    width: "250px",
    marginBottom: "-45px",
    position: "relative",
  },
  button: {
    position: "absolute",
    top: 222,
    right: 2,
  },
}));

const JokeWrap = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const searchQuery = useSelector(state => state.jokes.searchQuery);
  const fetchUrl = useSelector(state => state.jokes.fetchUrl);
  const isLoaded = useSelector(state => state.jokes.isLoaded);
  const joke = useSelector(state => state.jokes.joke);

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
      <Fragment>
        <div className={classes.jokeWrapper}>
          <img src={ChuckImg} alt="chuck" className={classes.chuckImgStyle} />
          <Paper variant="outlined" className={classes.paper}>
            {/* if loaded show joke content */}
            {isLoaded && (
              <Fade in={isLoaded} timeout={500} direction="right">
                <div className={classes.contentPadding}>
                  {/* if joke exist render component, else render message, if !search query -> show message */}
                  {joke ? (
                    <Joke jokeContent={joke.value} jokeCategory={joke.categories[0]} />
                  ) : (
                    <div>
                      {searchQuery ? (
                        <span>Can't find joke containing: "{searchQuery}"</span>
                      ) : (
                        <span>Can't load joke :(</span>
                      )}
                    </div>
                  )}
                </div>
              </Fade>
            )}
            <IconButton
              className={classes.button}
              onClick={() => {
                dispatch(fetchJokeAsync(fetchUrl));
              }}>
              <RefreshIcon color="secondary" />
            </IconButton>
          </Paper>
        </div>
      </Fragment>
    </Container>
  );
};

export default JokeWrap;
