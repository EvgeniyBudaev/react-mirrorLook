import {IS_WINDOW_SCROLL} from '@/frontend/redux/constants'

const initialState = {
  offset: false
}

const windowScrollReducer = (state = initialState, action) => {
  const {type} = action

  switch (type) {
    case IS_WINDOW_SCROLL: {
      return {...state, offset: true}
    }
    default:
      return state
  }
}

export default windowScrollReducer