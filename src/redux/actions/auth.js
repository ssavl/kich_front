import {
    AUTH_CHANGE_FIELD,
    AUTH_CLOSE_MODAL,
    AUTH_SET_USER } from './type'

export const changeField = (field, value) => (dispatch) => {
    dispatch({
        type: AUTH_CHANGE_FIELD,
        payload: {
            field: field,
            value: value,
        }
    })
}

export const closeModal = (value) => (dispatch) => {
    dispatch({
        type: AUTH_CLOSE_MODAL,
        payload: value,
    })
}

export const setUser = (id, username, first_name, last_name, email, img) => (dispatch) => {
    dispatch({
        type: AUTH_SET_USER,
        payload: {
            id: id,
            username: username,
            first_name: first_name,
            last_name: last_name,
            email: email,
            img: img,
        }
    })
}