import { OPEN_AUTH_MODAL } from '../actions/type'

const initialState = {
    isOpenAuthModal: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case OPEN_AUTH_MODAL : {
            return {
                ...state, isOpenAuthModal: action.payload,
            }
        }
        default :
            return state
    }
}