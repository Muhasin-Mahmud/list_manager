import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import ListCard from "./ListCard";
import useStyles from "../styles/homeStyles";
import { useDispatch, useSelector } from "react-redux";
import { getItemsAction } from "../actions/itemActions";
import { selectListAction } from "../actions/listActions";
import PlaceHolderListCard from './PlaceHolderListCard'

export const ListsContainer = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const myLists = useSelector((state) => state.listsReducer.lists);

  const handleClickList = (list) => {
    dispatch(selectListAction(list));
    dispatch(getItemsAction(list._id));
  };
 const AppList = myLists.map((list) => {
    return ( <Grid item key={list._id} onClick={() => handleClickList(list)}>
      <ListCard list={list} />
    </Grid>)
  })
  console.log("AppList =>", AppList);
  return (
      
    <Grid container className={classes.lists} spacing={1}>
     {  AppList.length <=0 ? (
      <Grid >
      <PlaceHolderListCard/>
        {/* <ListCard list={list} /> */}
      </Grid> 

      ):
      <>
      {AppList}
      </>
      }
    </Grid>
  );
};
