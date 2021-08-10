import { GET_ALL_GOODS } from '../actions/type'

export const setGoods = (value) => dispatch => {
    dispatch({
        type: GET_ALL_GOODS,
        payload: value,
    })
}