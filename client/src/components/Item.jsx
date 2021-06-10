import {
  IconButton,
  Container,
  Card,
  CardHeader,
  CardActions,
} from "@material-ui/core";

import React from "react";
import { IconButton, Container, Card, CardHeader, CardActions } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteItemAction, toggleItemAction } from "../actions/itemActions";
import { useSelector, useDispatch } from "react-redux";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const useStyles = makeStyles();

const Item = ({ listItem }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleDelete = (itemId) => {
    dispatch(deleteItemAction(itemId));
  };

  const handleToggle = item => {
    dispatch(toggleItemAction(item));
  }

  return (
    <Container>
      <Card
        container
        elevation={1}
        style={{
          backgroundColor: "#EAEAEA",
          marginBottom: "10px",
          width: "470px",
        }}
      >
        <CardHeader subheader={listItem.text} />

        <CardActions>
          <IconButton>
            <CheckCircleIcon color="primary" />
          </IconButton>
          <IconButton>
            <DeleteIcon
              color="secondary"
              onClick={() => handleDelete(listItem._id)}
            />
          </IconButton>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Item;
