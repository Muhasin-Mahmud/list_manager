import { helpCreateList, helpFetchLists, helpDeleteList } from "../api";

export const selectListAction = (list) => {
  return { type: "SELECT_LIST", payload: list };
};

export const getUserListsAction = (userId) => async (dispatch) => {
  try {
    const { data } = await helpFetchLists(userId);
    dispatch({ type: "GET_USER_LISTS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createListAction = (list) => async (dispatch) => {
  try {
    const { data } = await helpCreateList(list);
    dispatch({ type: "CREATE_LIST", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteListAction = (id) => async (dispatch) => {
  try {
    await helpDeleteList(id);
    dispatch({ type: "DELETE_LIST", payload: id });
  } catch (error) {
    console.log(error);
  }
};
