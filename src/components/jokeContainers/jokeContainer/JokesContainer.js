import React from "react";

import JokesCategories from "../../jokeComponents/jokeCategories/JokesCategories";
import SearchBar from "../../searchBar/SearchBar";
import JokeWrap from "../jokeWrap/JokeWrap";
import HeroImg from "../../../images/chuck_norris_hero_img.png";

// mui
import {Container} from "@material-ui/core/";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(6),
  },
  heroImg: {
    height: "250px",
    padding: 0,
    marginTop: '-70px'
  },
  container: {
    marginTop: '-50px'
  }
}));

const JokeContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={HeroImg} alt="hero" className={classes.heroImg} />
      <Container maxWidth="sm" className={classes.container}>
        <JokesCategories />
        <SearchBar type="joke-search" placeholder="Search joke..." />
        <JokeWrap />
      </Container>
    </div>
  );
};

export default JokeContainer;
