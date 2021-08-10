import { GET_ALL_GOODS } from '../actions/type'

const initialState = {
    goods: []
}

export default function (state= initialState, actions) {
    switch (actions.type) {
        case GET_ALL_GOODS: {
            return {
                ...state, goods: actions.payload,
            }
        }
        default:
            return state
    }
}