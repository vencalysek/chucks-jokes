import React from 'react'

// mui
import {Input} from "@material-ui/core/";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  input: {
    padding: theme.spacing(1),
    transition: theme.transitions.create("width"),
    width: "18ch",
    "&:focus": {
      width: "20ch",
    },
  },
}));

const CustomInput = ({placeholder, value, handleChange}) => {

  const classes = useStyles();
  return (
    <Input
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        classes={{
          input: classes.input,
        }}
      />
  )
}

export default CustomInput
