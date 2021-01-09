import {CURRENT_CATEGORY} from "../constants";


const categoryReducer = (state = {}, action) => {
    const {type, payload} = action
    //console.log('[categoryReducer][action]', action)
    //console.log('[categoryReducer][payload]', payload)

    switch (type) {
        case CURRENT_CATEGORY:
            return {...state, currentCategory: payload.category}
        default:
            return state
    }
}

export default categoryReducer