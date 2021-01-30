import produce, {Draft} from 'immer'
import {LOAD_PRODUCT_BY_ID, REQUEST, SUCCESS, FAILURE, ADD_REVIEW} from '../constants'
import {arrToMap} from '../utils'
import {ILoading, ILoaded, IReviewId, AppThunk} from '../types'
import {ILoadProductByIdAction, IAddReviewAction} from '../actions/actions'


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
  error: object | null,
  entities: IEntities
}

const initialState: IStateProduct  = {
  loading: {},
  loaded: {},
  error: null,
  entities: {},
}

type ActionsType = IAddReviewAction & ILoadProductByIdAction

const productReducer = (state = initialState, action: any):IStateProduct  =>
  produce(state, (draft: Draft<IStateProduct>) => {
    // const {type, productId, product, error, reviewId, payload} = action
    //console.log('[productReducer][action]', action)

    switch(action.type) {
      case LOAD_PRODUCT_BY_ID + REQUEST: {
        draft.loading[action.productId] = true
        draft.error = null
        break
      }
      case LOAD_PRODUCT_BY_ID + SUCCESS: {
        draft.loading[action.productId] = false
        draft.loaded[action.productId] = true
        draft.error = null
        draft.entities = {...draft.entities, ...arrToMap(action.product)}
        break
      }
      case LOAD_PRODUCT_BY_ID + FAILURE: {
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
