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
  },

  input: {
    padding: theme.spacing(1),
    transition: theme.transitions.create("width"),
    width: "18ch",
    "&:focus": {
      width: "20ch",
    },
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
      if (query.length >= 3) {
        dispatch(searchJokeAsync(query));
        setQuery("");
      } else {
        alert("Please write longer query, minimum 3 characters.");
      }
    } else return;
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.searchform}>
      <CustomInput
        placeholder={"Seach joke"}
        handleChange={handleChange}
        value={query}
      />

      <IconButton aria-label="search" type="submit">
        <SearchIcon />
      </IconButton>
    </form>
  );
};

export default SearchBar;
