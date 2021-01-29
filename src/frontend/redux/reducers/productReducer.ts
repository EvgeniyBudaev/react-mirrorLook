import produce, {Draft} from 'immer'
import {LOAD_PRODUCT_BY_ID, REQUEST, SUCCESS, FAILURE, ADD_REVIEW} from '../constants'
import {arrToMap} from '../utils'

type LoadingType = {
  [productId: string]: boolean
}

type LoadedType = {
  [productId: string]: boolean
}

type ReviewIdType = {
  reviewId: string,
}

type PayloadType = {
  productId: string,
  reviews: Array<ReviewIdType>
}

type EntitiesType = {
  [payload: string]: PayloadType
}

export type InitialStateProductsType = {
  loading: LoadingType
  loaded: LoadedType,
  error: object | null,
  entities: EntitiesType
}

const initialState: InitialStateProductsType = {
  loading: {},
  loaded: {},
  error: null,
  entities: {},
}

const productReducer = (state = initialState, action: any):InitialStateProductsType =>
  produce(state, (draft: Draft<InitialStateProductsType>) => {
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



export {productReducer}
