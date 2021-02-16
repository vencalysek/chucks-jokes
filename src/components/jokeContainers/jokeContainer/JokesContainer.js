import React, {useEffect, useState} from "react";

import JokesCategories from "../../jokeComponents/jokeCategories/JokesCategories";
import SearchBar from "../../searchBar/SearchBar";
import JokeWrap from "../jokeWrap/JokeWrap";

// mui
import {Container, Typography} from "@material-ui/core/";
import {makeStyles} from "@material-ui/core/styles";
import {Fade} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import {createMuiTheme} from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {main: "#2f8bd8"},
    secondary: {main: "#cf542e"},
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(6),
  },
  title2: {
    color: '#cf542e'
  }
}));

const JokeContainer = () => {
  const classes = useStyles();
  const [loadHomepage, setLoadHomepage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadHomepage(true);
    }, 350);
  }, []);

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Fade in={loadHomepage} timeout={1000}>
          <Container maxWidth="sm">
            <Typography variant="h3" color="primary">
              Chuck's <span className={classes.title2}>Jokes</span>
            </Typography>
            <JokesCategories />
            <SearchBar type="joke-search" placeholder="Search joke..." />
            <JokeWrap />
          </Container>
        </Fade>
      </ThemeProvider>
    </div>
  );
};

export default JokeContainer;
