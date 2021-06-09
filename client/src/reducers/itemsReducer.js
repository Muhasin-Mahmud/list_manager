import { LOGOUT } from "../actions/types";

const initialState = {
    items: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'GET_ITEMS':
            return {
                items: action.payload
            }
        case 'ADD_ITEM':
            console.log('ADD_ITEM', action.payload);
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        case "DELETE_ITEM":
            return {
                ...state,
                items: state.items.filter((item) => item._id !== action.payload)
            };

        case "CLEAR_ITEMS":
            return {
                ...state,
                items: []
            }
        default:
            return state;
    }
}