import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Item from './Item';
import useStyles from "../styles/homeStyles";
import { useDispatch, useSelector } from 'react-redux';
import { getItemsAction } from '../actions/itemActions';

export const ItemsContainer = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const selectedList = useSelector((state) => state.listsReducer.selectedList);
    const myItems = useSelector((state) => state.itemsReducer.items);

    useEffect(() => {
        selectedList?._id && dispatch(getItemsAction(selectedList._id));
    }, [selectedList])

    return (
        <Grid container className={classes.items} xs={6}>
            {myItems?.map((item) => (
                <Item listItem={item} key={item.itemId} />
            ))}
        </Grid>
    )
}
