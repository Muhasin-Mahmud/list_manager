import { LOGOUT } from "../actions/types";

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_ITEMS":
      return {
        items: action.payload,
      };
    case "ADD_ITEM":
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    case "DELETE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };

    case "TOGGLE_ITEM":
      const filteredItems = state.items.filter(
        (item) => item._id !== action.payload._id
      );
      return {
        ...state,
        items: [action.payload, ...filteredItems],
      };

    case "CLEAR_ITEMS":
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
}
