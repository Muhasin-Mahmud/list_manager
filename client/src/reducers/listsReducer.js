const initialState = {
  selectedList: {},
  lists: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_USER_LISTS':
      console.log('reducer here', action.type);
      return {
        ...state,
        selectedList: action.payload[0],
        lists: action.payload
      }
    case "SELECT_LIST":
      return {
        ...state,
        selectedList: action.payload,
      };
    case 'CREATE_LIST':
      return {
        ...state,
        selectedList: action.payload,
        lists: [action.payload, ...state.lists]
      }
    case "DELETE_LIST":
      return {
        ...state,
        lists: state.lists.filter((list) => list._id !== action.payload)
      };
    case "CLEAR_LISTS":
      return {
        ...state,
        selectedList: {},
        lists: []
      }

    default:
      return state;
  }
}



