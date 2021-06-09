import { helpAddItem, helpDeleteItem, helpGetItems } from "../api";

export const getItemsAction = (id) => async (dispatch) => {
  const res = await helpGetItems(id);
  console.log('helpGetItems', id);
  dispatch({ type: "GET_ITEMS", payload: res.data });
}

export const addItemAction = (listId, item) => async dispatch => {
  try {
    const { data } = await helpAddItem(listId, item);
    dispatch({ type: "ADD_ITEM", payload: data });
  } catch (error) {
    console.log(error);
  }
}

export const deleteItemAction = (id) => async (dispatch) => {
  try {
    const { data } = await helpDeleteItem(id);
    dispatch({ type: "DELETE_ITEM", payload: id });
  } catch (error) {
    console.log(error);
  }
};