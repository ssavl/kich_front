import {
    SET_ADD_ITEMS_STEP,
    SET_ITEM_FIELD,
    SET_ADD_ITEM_MODAL } from './type'

export const setAddItemStep = (value) => (dispatch) => {
    dispatch({
        type: SET_ADD_ITEMS_STEP,
        payload: value,
    })
}

export const setAddItemModal = (value) => (dispatch) => {
    dispatch({
        type: SET_ADD_ITEM_MODAL,
        payload: value,
    })
}

export const setAddItemField = (field, value) => (dispatch) => {
    dispatch({
        type: SET_ITEM_FIELD,
        payload: {
            field: field,
            value: value,
        }
    })
}