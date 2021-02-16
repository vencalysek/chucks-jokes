import React, {useState} from "react";

// mui
import {IconButton} from "@material-ui/core/";
import {makeStyles} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

// redux
import {useDispatch} from "react-redux";
import {searchJokeAsync} from "../../redux/jokes/jokes.actions";
import CustomInput from "../customInput/CustomInput";

const useStyles = makeStyles(theme => ({
  searchform: {
    margin: theme.spacing(3),
    marginLeft: "70px",
  },
}));

const SearchBar = ({type, placeholder}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    // logic for search joke search
    if (type === "joke-search") {
      if (query.trim().length >= 3) {
        dispatch(searchJokeAsync(query));
        setQuery("");
      } else {
        alert("Please write longer query, minimum are 3 characters...");
      }
    } else return;
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.searchform}>
      <CustomInput placeholder={placeholder} handleChange={handleChange} value={query} />

      <IconButton aria-label="search" type="submit">
        <SearchIcon />
      </IconButton>
    </form>
  );
};

export default SearchBar;
