import produce from 'immer'
import {REQUEST, SUCCESS, FAILURE, LOAD_REVIEWS, ADD_REVIEW} from '../constants'
import {arrToMap} from '../utils'

const initialState = {
  loading: {},
  loaded: {},
  error: null,
  entities: {},
}

const reviewsReducer = produce((draft = initialState, action) => {
  const {type, productId, response, payload, reviewId, userId} = action

  switch (type) {
    case LOAD_REVIEWS + REQUEST: {
      draft.error = null
      draft.loading[productId] = true
      break
    }
    case LOAD_REVIEWS + SUCCESS: {
      draft.loading[productId] = false
      draft.loaded[productId] = true
      draft.entities = {...draft.entities, ...arrToMap(response)}
      break
    }
    case LOAD_REVIEWS + FAILURE: {
      draft.loading[productId] = false
      draft.loaded[productId] = false
      draft.error = action.error
      break
    }
    case ADD_REVIEW:
      const {text, rating} = payload.review
      draft.entities[reviewId] = {id: reviewId, userId, text, rating}
      break
    default:
      return draft
  }
})

export default reviewsReducer
