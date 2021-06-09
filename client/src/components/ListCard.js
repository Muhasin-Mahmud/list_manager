import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  Container,
  IconButton,
  Typography,
} from "@material-ui/core";
// import AddIcon from "@material-ui/icons/Add";
import { useSelector, useDispatch } from "react-redux";
import { selectListAction, deleteListAction } from "../actions/listActions";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { green } from "@material-ui/core/colors";
import moment from "moment";
import { addItemAction } from "../actions/itemActions";

const ListCard = ({ list }) => {
  const dispatch = useDispatch();
  const selectedList = useSelector(state => state.listsReducer.selectedList);

  const handleDelete = () => {
    dispatch(deleteListAction(list._id));
  };

  const addClick = () => {
    dispatch(addItemAction(list._id));
  };

  let selectedItemColor = list._id === selectedList._id;

  return (
    <Container>
      <Card
        container
        elevation={1}
        style={{
          width: "450px",
          backgroundColor: "#eaf3f8",
          border: selectedItemColor ? "1px solid blue" : "0px",
          marginBottom: "10px",
        }}
      >
        <CardHeader
          title={list.title}
          subheader={list.description}
        />
        <CardActions>
          <IconButton>
            <EditIcon color="primary" onClick={addClick} />
          </IconButton>
          <IconButton>
            <DeleteIcon color="secondary" onClick={handleDelete} />
          </IconButton>
          <Typography variant="body2" style={{ float: "right" }}>
            {moment(list).fromNow()}
          </Typography>
        </CardActions>
      </Card>
    </Container>
  );
};

export default ListCard;
