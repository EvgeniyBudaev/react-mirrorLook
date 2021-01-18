import produce from 'immer'
import {LOAD_USERS, REQUEST, SUCCESS, FAILURE, ADD_REVIEW} from '../constants'
import {arrToMap} from '../utils'

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  entities: {},
}

const usersReducer = produce((draft = initialState, action) => {
  const {type, payload, userId} = action
  //console.log('[usersReducer][action]', action)

  switch (type) {
    case LOAD_USERS + REQUEST: {
      draft.error = null
      draft.loading = true
      break
    }
    case LOAD_USERS + SUCCESS: {
      draft.loading = false
      draft.loaded = true
      draft.entities = {
        ...draft.entities,
        ...arrToMap(action.response),
      }
      break
    }
    case LOAD_USERS + FAILURE: {
      draft.loading = false
      draft.loaded = false
      draft.error = action.error
      break
    }
    case ADD_REVIEW:
      const {name} = payload.review
      draft.entities[userId] = {id: userId, name}
      break
    default:
      return draft
  }
})

export default usersReducer
