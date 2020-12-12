import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "39ch",
    },
  },
}));

const Input = ({ setNumber }) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        placeholder="Введите время отправки,прибытие,назву"
        onChange={(e) => setNumber(e.target.value)}
        label="Material UI Input"
      />
    </form>
  );
};
export default Input;
