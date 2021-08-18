import {
    AUTH_CHANGE_FIELD,
    AUTH_CLOSE_MODAL,
    AUTH_SET_USER,
}
    from '../actions/type'

const initialState = {
    fields: {
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    },
    auth: {
        id: '',
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        code: '',
        auth_token: '',
        isAuthenticated: false,
        user: false,
        img: null,
    }

}

export default function (state = initialState, actions) {
    switch (actions.type) {
        case AUTH_CHANGE_FIELD: {
            return {
                ...state, fields: {...state.fields, [actions.payload.field]: actions.payload.value,}
            }
        }
        case AUTH_CLOSE_MODAL: {
            return {
                ...state,
                isAuthModalOpen: false,
            };
        }
        case AUTH_SET_USER: {
            return {
                ...state, auth: {
                    ...state.auth,
                    id: actions.payload.id,
                    username: actions.payload.username,
                    first_name: actions.payload.first_name,
                    last_name: actions.payload.last_name,
                    email: actions.payload.email,
                    img: actions.payload.img,
                }
            }
        }
        default:
            return state
    }
}