import { activeTypes } from './'

const defaultState = false

export default (state = defaultState, action) => {
    switch (action.type) {
        case activeTypes.TOGGLE_ACTIVE:
            return !state;
        default:
            return state;
    }
}