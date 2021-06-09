import { combineReducers } from "redux";
import listsReducer from "./listsReducer";
import authReducer from "./authReducer";
import itemsReducer from "./itemsReducer";

export const reducers = combineReducers({
  listsReducer,
  authReducer,
  itemsReducer
});
