import {IS_WINDOW_SCROLL} from '@/frontend/redux/constants'

const initialState = {
  offset: 100,
  isOffset: false
}

const windowScrollReducer = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case IS_WINDOW_SCROLL: {
      return {...state, isOffset: payload.isOffset}
    }
    default:
      return state
  }
}

export default windowScrollReducer
