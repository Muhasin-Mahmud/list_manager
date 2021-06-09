import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getUserListsAction } from "../actions/listActions";
import { ListsContainer } from "./ListsContainer";
import { ItemsContainer } from "./ItemsContainer";
import useStyles from "../styles/homeStyles";
import { Redirect } from "react-router";

const Homepage = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const userId = useSelector(state => state.authReducer.user._id);

  useEffect(() => {
    console.log('effect here', userId);
    userId && dispatch(getUserListsAction(userId));
  }, [userId]);

  const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);
  if (!isAuthenticated) return <Redirect to="/" />

  return (
    <Grid container className={classes.root}>
      <ListsContainer />
      <ItemsContainer />
    </Grid>
  );
};

export default Homepage;
