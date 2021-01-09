import {normalizedProducts} from '../../../api/mockapi'
import { arrToMap } from '../utils';

// { [productId]: product }
const productsReducer = (state = arrToMap(normalizedProducts), action) => {
    const {type} = action

    switch (type) {
        default:
            return state
    }
}

export default productsReducer