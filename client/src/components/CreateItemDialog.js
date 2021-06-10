import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useStyles from "../styles/createListStyle";
import { useDispatch, useSelector } from "react-redux";
import { addItemAction } from "../actions/itemActions";
import { Grid } from "@material-ui/core";

export default function FormDialog({ open, setOpen }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const loggedUser = JSON.parse(localStorage.getItem('auth-user'));
  const userId = loggedUser?._id;

  const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);

  const listId = useSelector(state => state.listsReducer.selectedList?._id);

  const [newItem, setNewItem] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullItem = { ...newItem, priority: 1, status: false, userId, listId };
    dispatch(addItemAction(listId, fullItem));
    setOpen(false);
    setNewItem({});
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
        <DialogTitle id="form-dialog-title">Add a new item :</DialogTitle>
        <DialogContent>
          <form
            autoComplete="off"
            noValidate
            className={`${classes.root} ${classes.form}`}
            onSubmit={handleSubmit}
          >
            <TextField
              name="newItem"
              variant="outlined"
              label="New Item"
              fullWidth
              value={newItem.newItem}
              onChange={(e) => setNewItem({ ...newItem, text: e.target.value })}
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
