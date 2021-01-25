import produce from 'immer'
import {LOAD_PRODUCT_BY_ID, REQUEST, SUCCESS, FAILURE, ADD_REVIEW} from '../constants'
import {arrToMap} from '../utils'


const initialState = {
  loading: {},
  loaded: {},
  error: null,
  entities: {},
}

const productReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    const {type, productId, product, error, reviewId, payload} = action
    //console.log('[productReducer][action]', action)

    switch(type) {
      case LOAD_PRODUCT_BY_ID + REQUEST: {
        draft.loading[productId] = true
        draft.error = null
        break
      }
      case LOAD_PRODUCT_BY_ID + SUCCESS: {
        draft.loading[productId] = false
        draft.loaded[productId] = true
        draft.error = null
        draft.entities = {...draft.entities, ...arrToMap(product)}
        break
      }
      case LOAD_PRODUCT_BY_ID + FAILURE: {
        draft.loading[productId] = false
        draft.loaded[productId] = false
        draft.error = error
        break
      }
      case ADD_REVIEW:
        return produce(state, draft => {
          draft.entities[payload.productId].reviews.push(reviewId)
        });
      default:
        return
    }
  })



export default productReducer
