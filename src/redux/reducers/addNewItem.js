import {
    SET_ADD_ITEMS_STEP,
    SET_ITEM_FIELD,
    SET_ADD_ITEM_MODAL } from '../actions/type'

const initialState = {
    newItemModal: false,
    addNewItemStep: '',
    fields: {
        title: '',
        description: '',
        price: '',
        size: '',
        category: '',
        gender: '',
        condition: '',
        brand: '',
        swap: null,
        mail_delivery: null,
        safe_deal: null,
        country: '',
        city: '',
        model: '',
        img: null,
    }
}

export default function (state = initialState, actions) {
    switch (actions.type) {
        case SET_ADD_ITEM_MODAL : {
            return {
                ...state, newItemModal: actions.payload,
            }
        }
        case SET_ADD_ITEMS_STEP : {
            return {
                ...state, addNewItemStep: actions.payload
            }
        }
        case SET_ITEM_FIELD : {
            return {
                ...state, fields: {...state.fields, [actions.payload.field]: actions.payload.value}
            }
        }
        default: return state
    }
}