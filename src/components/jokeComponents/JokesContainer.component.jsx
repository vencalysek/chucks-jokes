import React from "react";

import JokesCategories from "./JokesCategories.component";
import SearchBar from "../search-bar/SearchBar.component";
import Joke from "./Joke.component";

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
