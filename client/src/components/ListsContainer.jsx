import React, { useState } from 'react';
import { Button, Grid } from '@material-ui/core';
import ListCard from './ListCard';
import useStyles from "../styles/homeStyles";
import { useDispatch, useSelector } from 'react-redux';
import { getItemsAction } from '../actions/itemActions';
import { selectListAction } from '../actions/listActions';

export const ListsContainer = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const myLists = useSelector((state) => state.listsReducer.lists);
    
    const handleClickList = (list) => {
        dispatch(selectListAction(list));
        dispatch(getItemsAction(list._id));
    };

    return (
        <Grid container className={classes.lists} spacing={1}>
            {myLists.map((list) => (
                <Grid item key={list._id} onClick={() => handleClickList(list)} >
                    <ListCard list={list} />
                </Grid>
            ))}

        </Grid>
    )
}
