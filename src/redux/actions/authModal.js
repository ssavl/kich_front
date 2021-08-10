import { OPEN_AUTH_MODAL } from './type'

export const openAuthModal = (isOpen) => dispatch => {
    dispatch({
        type: OPEN_AUTH_MODAL,
        payload: isOpen,
    })
}