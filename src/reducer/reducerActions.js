import { FETCH_SHOPPING_LIST, DELETE_SHOPPING_LIST, ADD_SHOPPING_LIST } from './index';
import data from './db/shoppingList.json';

const shoppingListItems = data;

export const actionGetShoppingList = () => {
    return({
        type: FETCH_SHOPPING_LIST,
        payload: shoppingListItems
    })
}

export const actionDeleteShoppingItem = newValue => {
    return({
        type: DELETE_SHOPPING_LIST,
        payload: newValue
    })
}

export const actionAddShoppingList = data => {
    return ({
        type: ADD_SHOPPING_LIST,
        payload: data.shoppingList
    })
}