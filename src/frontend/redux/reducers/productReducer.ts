import produce, { Draft } from 'immer'
import { ADD_REVIEW, LOAD_PRODUCT_BY_ID_REQUEST, LOAD_PRODUCT_BY_ID_SUCCESS, LOAD_PRODUCT_BY_ID_FAILURE } from '../constants'
import {arrToMap} from '../utils'
import { ILoading, ILoaded, IReviewId, IFailure, ProductByIdTypes } from '../types'


interface IPayload {
  productId: string,
  reviews: Array<IReviewId>
}

interface IEntities {
  [payload: string]: IPayload
}

export interface IStateProduct {
  loading: ILoading
  loaded: ILoaded,
  error: null | IFailure,
  entities: IEntities
}

const initialState: IStateProduct  = {
  loading: {},
  loaded: {},
  error: null as IFailure | null,
  entities: {},
}



const productReducer = (state = initialState, action: any):IStateProduct  =>
  produce(state, (draft: Draft<IStateProduct>) => {
    // const {type, productId, product, error, reviewId, payload} = action
    //console.log('[productReducer][action]', action)

    switch(action.type) {
      case LOAD_PRODUCT_BY_ID_REQUEST: {
        draft.loading[action.productId] = true
        draft.error = null
        break
      }
      case LOAD_PRODUCT_BY_ID_SUCCESS: {
        draft.loading[action.productId] = false
        draft.loaded[action.productId] = true
        draft.error = null
        draft.entities = {...draft.entities, ...arrToMap(action.product)}
        break
      }
      case LOAD_PRODUCT_BY_ID_FAILURE: {
        draft.loading[action.productId] = false
        draft.loaded[action.productId] = false
        draft.error = action.error
        break
      }
      case ADD_REVIEW:
        return produce(state, draft => {
          draft.entities[action.payload.productId].reviews.push(action.reviewId)
        });
      default:
        return
    }
  })



export {productReducer}
