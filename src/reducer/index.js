export const FETCH_SHOPPING_LIST = '[LISTPAGE] - FETCH_SHOPPING_LIST';
export const DELETE_SHOPPING_LIST = '[LISTPAGE] - DELETE_SHOPPING_LIST';
export const ADD_SHOPPING_LIST = '[LISTPAGE] - ADD_SHOPPING_LIST';

const reducer = (state, action) => {
  switch (action.type) {
      case FETCH_SHOPPING_LIST:
          return {
                  shoppingList: action.payload,
                  isLoaded: true
              }
      case DELETE_SHOPPING_LIST:
          return {
              ...state,
              shoppingList: action.payload
          }
      case ADD_SHOPPING_LIST:
        return {
            ...state,
            shoppingList: action.payload
        }
      default:
          return state;
  }
}

export default reducer;