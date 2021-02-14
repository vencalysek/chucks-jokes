import React from "react";

import JokesCategories from "../jokeComponents/JokesCategories";
import SearchBar from "../../searchBar/SearchBar";
import Joke from "../jokeComponents/Joke";

// mui
import {Container, Typography} from "@material-ui/core/";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(6),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const JokeContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Typography variant="h3">Chuck's Jokes</Typography>
        <JokesCategories />
        <SearchBar type='joke-search' placeholder='Search joke...' />
        <Joke />
      </Container>
    </div>
  );
};

export default JokeContainer;
