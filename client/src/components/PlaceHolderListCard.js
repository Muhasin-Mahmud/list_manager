import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  Container,
  IconButton,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const PlaceHolderListCard = () => {
  return (
    <Container>
      <Card
        container
        elevation={1}
        style={{
          width: "450px",
          backgroundColor: "#eceff1",
          marginBottom: "10px",
        }}
      >
        <CardHeader
          style={{ color: "#bbbbbb" }}
          title=" Title"
          subheader="Description"
        />
        <CardActions>
          <IconButton>
            <DeleteIcon color="disabled" />
          </IconButton>
          <Typography
            variant="body2"
            style={{ float: "right", color: "#bbbbbb" }}
          >
            32 minutes ago
          </Typography>
        </CardActions>
      </Card>
    </Container>
  );
};

export default PlaceHolderListCard;
