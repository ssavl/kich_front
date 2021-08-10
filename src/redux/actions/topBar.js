import { OPEN_TOP_BAR } from './type'

export const setOpenTopBar = (value) => dispatch => {
    dispatch({
        type: OPEN_TOP_BAR,
        payload: value,
    })
}