import React, {  useState } from "react";
import "../App.css";
import { makeStyles } from "@mui/styles";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

const useStyles = makeStyles({
  root: {
    display: "grid",
    flexDirection: "column",
    border: "5px solid brown",
    padding: "20px 40px",
    margin: "30px 40px",
    width: "50%",
  },
  header: {
    fontFamily: "Quicksand",
    padding: "10px 0px",
  },
  btn: {
    background: "linear-gradient(45deg, #390914 30%, #532710 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    fontFamily: "Quicksand",
    fontSize: "15px",
    margin: "20px 0px",
    width: 100,
    cursor: "pointer",
  },
  topHeader: {
    fontFamily: "Quicksand",
    textAlign: "center",
    fontSize: "25px",
  },
  valid: {
    border: "5px solid green",
    //padding: "20px 40px",
    margin: "30px 40px",
    backgroundColor: "green",
    color: "white",
  },
  inValid: {
    border: "5px solid red",
    //padding: "20px 40px",
    margin: "30px 40px",
    backgroundColor: "red",
    color: "white",
  },
  snack: {
    display: "none",
  },
});

function UrlValidator() {
  const classes = useStyles();
  const [valid, setValid] = useState(false);
  const [url, setUrl] = useState("");
  const [display, setDisplay] = useState(false);

  const handleClose = () => {
    setDisplay(false);
  };

  const isValidURL = () => {
    console.log("clicked");
    try {
      new URL(url);
      setValid(true);
      setDisplay(true);
    } catch (e) {
      setValid(false);
      setDisplay(true);
    }
  };

  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <>
      <div className={classes.root}>
        {display ? (
          valid ? (
            <header className={classes.valid}>{url} is Valid</header>
          ) : (
            <header className={classes.inValid}>{url} is Invalid</header>
          )
        ) : (
          <></>
        )}
        <p className={classes.topHeader}>URL Validator</p>
        <header className={classes.header}> Domain</header>
        <textarea
          className={classes.textarea}
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        ></textarea>
        <header className={classes.header}>Path</header>
        <textarea></textarea>
        <header className={classes.header}>Method</header>
        <select name="methods" id="method">
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
        </select>
        <header className={classes.header}>Body</header>
        <textarea rows={6}></textarea>
        <button className={classes.btn} onClick={isValidURL}>
          Validate
        </button>
      </div>
      <Snackbar
        className={classes.snack}
        open={display}
        autoHideDuration={3000}
        onClose={handleClose}
        message={valid ? "Valid" : "Invalid"}
        action={action}
      />
    </>
  );
}

export default UrlValidator;
