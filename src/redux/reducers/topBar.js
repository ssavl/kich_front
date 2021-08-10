import { OPEN_TOP_BAR } from '../actions/type'

const initialState = {
    isOpenTopBar: false,
}

export default function (state= initialState, action) {
    switch (action.type) {
        case OPEN_TOP_BAR : {
            return {
                ...state,
                isOpenTopBar: action.payload
            }
        }
        default : return state
    }
}