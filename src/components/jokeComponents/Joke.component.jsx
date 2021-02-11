import React, {useEffect} from "react";

// redux
import {useDispatch, useSelector} from "react-redux";
import {fetchJokeAsync} from "../../redux/jokes/jokes.actions";

// mui
import {Button, Container, Paper, Typography} from "@material-ui/core/";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: "center",
  },
  paper: {
    margin: "30px auto",
    // marginTop: theme.spacing(5),
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    minWidth: "300px",
    maxWidth: "max-content",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  button: {
    // marginTop: theme.spacing(5),
    maxWidth: "max-content",
  },
}));

const Joke = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const joke = useSelector(state => state.jokes.joke);
  const fetchUrl = useSelector(state => state.jokes.fetchUrl);

  useEffect(() => {
    dispatch(fetchJokeAsync(fetchUrl));
  }, [dispatch, fetchUrl]);

  return (
    <div>
      <Container className={classes.container}>
        <Paper variant="outlined" className={classes.paper}>
          <Typography variant='subtitle1'>{joke && joke.value}</Typography>
        </Paper>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.button}
          onClick={() => {
            dispatch(fetchJokeAsync(fetchUrl));
          }}>
          I like it, kick me another one!
        </Button>
      </Container>
    </div>
  );
};

export default Joke;
