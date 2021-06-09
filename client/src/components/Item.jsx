import { IconButton, Container, Card, CardHeader, CardActions } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteItemAction } from "../actions/itemActions";
import { useSelector, useDispatch } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";


const useStyles = makeStyles();

const Item = ({ listItem }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleDelete = (itemId) => {
    dispatch(deleteItemAction(itemId));
  };

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
            <EditIcon color="primary" />
          </IconButton>
          <IconButton>
            <DeleteIcon color="secondary" onClick={() => handleDelete(listItem._id)} />
          </IconButton>

        </CardActions>
      </Card>
    </Container>
  );
};

export default Item;
