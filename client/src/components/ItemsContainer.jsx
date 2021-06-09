import React, { useState, useEffect } from 'react';
import { Button, Grid } from '@material-ui/core';
import Item from './Item';
import CreateItemDialog from "./CreateItemDialog";
import useStyles from "../styles/homeStyles";
import { useDispatch, useSelector } from 'react-redux';
import { getItemsAction } from '../actions/itemActions';

export const ItemsContainer = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const selectedList = useSelector((state) => state.listsReducer.selectedList);

    useEffect(() => {
        dispatch(getItemsAction(selectedList?._id))
    }, [selectedList])

    useEffect(() => {
        selectedList && dispatch(getItemsAction(selectedList._id));
    }, [selectedList])

    const myItems = useSelector((state) => state.itemsReducer.items);

    return (
        <Grid container className={classes.items} xs={6}>
            {myItems?.map((item) => (
                <Item listItem={item} key={item.itemId} />
            ))}
        </Grid>
    )
}
