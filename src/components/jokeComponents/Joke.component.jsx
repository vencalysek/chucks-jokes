import React, {useEffect, useState} from "react";

// redux
import {useDispatch, useSelector} from "react-redux";
import {fetchJokeAsync, searchJokeAsync} from "../../redux/jokes/jokes.actions";

// mui
import {Button, Container, Paper, Typography, Input} from "@material-ui/core/";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: "center",
    marginTop: theme.spacing(4),
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
  },

  inputInput: {
    padding: theme.spacing(1),
    transition: theme.transitions.create("width"),
    width: "18ch",
    "&:focus": {
      width: "20ch",
    },
  },

  paper: {
    margin: "30px auto",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    maxWidth: "max-content",
    textOverflow: "ellipsis",
    overflow: "hidden",
    position: 'relative'
  },
  
  jokeContent:{
    padding: theme.spacing(3)
  },

  categoryCaption: {
    position: 'absolute',
    right: theme.spacing(1),
    bottom: theme.spacing(1),
    fontStyle: 'italic',
  },

  button: {
    maxWidth: "max-content",
  },
}));

const Joke = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

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

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.length >= 3) {
      dispatch(searchJokeAsync(query));
      setQuery("");
    } else {
      alert("Please write longer query, minimum 3 characters.");
    }
  };

  return (
    <div>
      <Container className={classes.container}>
        <form onSubmit={handleSubmit}>
          <Input
            value={query}
            placeholder="Search…"
            onChange={handleChange}
            classes={{
              input: classes.inputInput,
            }}
          />
        </form>

        {/* if loaded show joke content */}
        {isLoaded && (
          <>
            <Paper variant="outlined" className={classes.paper}>
              {/* if joke exist show content, if joke doesnt exist -> query wasn't found */}
              {joke ? (
                <Container>
                  <Typography variant="subtitle1" className={classes.jokeContent}>{joke.value}</Typography>
                  
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
          </>
        )}
      </Container>
    </div>
  );
};

export default Joke;
