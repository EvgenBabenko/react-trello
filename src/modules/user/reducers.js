import { userTypes } from './'

const defaultState = ''

export default (state = defaultState, action) => {
    switch (action.type) {
        case userTypes.SIGN_IN:
            return action.value;
        case userTypes.SIGN_OUT:
            return action.value;
        default:
            return state;
    }
}