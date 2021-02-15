import React from "react";

// mui
import {Container, Typography} from "@material-ui/core/";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  jokeContent: {
    padding: theme.spacing(2),
  },

  categoryCaption: {
    position: "absolute",
    right: theme.spacing(1),
    bottom: theme.spacing(1),
    fontStyle: "italic",
  },
}));

const Joke = ({jokeContent, jokeCategory='random'}) => {
  const classes = useStyles();

  return (
    <Container>
      {/* joke content */}
      <Typography variant="subtitle1" className={classes.jokeContent}>
        {jokeContent}
      </Typography>

      {/* joke category */}
      <Typography variant="caption" className={classes.categoryCaption}>
      <span>"{jokeCategory}"</span>
      </Typography>
    </Container>
  );
};

export default Joke;
