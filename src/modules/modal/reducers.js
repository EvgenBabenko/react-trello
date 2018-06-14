import { modalTypes } from './'

const defaultState = false

export default (state = defaultState, action) => {
    switch (action.type) {
        case modalTypes.TOGGLE_MODAL:
            return !state;
        default:
            return state;
    }
}