import { FETCH_SHOPPING_LIST, DELETE_SHOPPING_LIST, ADD_SHOPPING_LIST } from './index';

const shoppingListItems = [
    {
        id: 0,
        name: 'Pure Gold',
        type: 'Gorcery',
        itemCount: 10,
        itemList: [
            {
                name: 'milk',
                count: 1
            },
            {
                name: 'coffee',
                count: 12
            },
            {
                name: 'Eggs',
                count: 12
            },
        ]
    },
    {
        id: 1,
        name: 'Pure Silver',
        type: 'Gorcery',
        itemCount: 10,
        itemList: [
            {
                name: 'milk',
                count: 1
            },
            {
                name: 'coffee',
                count: 12
            },
            {
                name: 'Eggs',
                count: 12
            },
        ]
    }
]

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