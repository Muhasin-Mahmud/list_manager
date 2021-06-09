import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useStyles from "../styles/createListStyle";
import { useDispatch, useSelector } from "react-redux";
import { createListAction } from "../actions/listActions";
import { Grid } from "@material-ui/core";

export default function FormDialog({ open, setOpen }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const loggedUser = JSON.parse(localStorage.getItem('auth-user'));
  const userId = loggedUser?._id;

  const [newList, setNewList] = useState({ title: "", description: "", });

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullList = { ...newList, userId };
    dispatch(createListAction(fullList));
    setOpen(false)
    setNewList({});
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid  >
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add a new list :</DialogTitle>
        <DialogContent>
          <form
            autoComplete="off"
            noValidate
            className={`${classes.root} ${classes.form}`}
            onSubmit={handleSubmit}
          >
            <TextField
              name="title"
              variant="outlined"
              label="Title"
              fullWidth
              value={newList.title}
              onChange={(e) => setNewList({ ...newList, title: e.target.value })}
            />
            <TextField
              name="description"
              variant="outlined"
              label="Description"
              fullWidth
              value={newList.description}
              onChange={(e) =>
                setNewList({ ...newList, description: e.target.value })
              }
            />
            <DialogActions>
              <Button type="submit" color="primary">
                Add
              </Button>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>

            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </Grid>
  );
}
