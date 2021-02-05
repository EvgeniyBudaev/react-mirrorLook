import {IS_WINDOW_SCROLL} from '../constants'
import {IHandleWindowScroll} from '../types'

interface IStateWindowScroll {
  offset: number,
  isOffset: boolean
}

const initialState: IStateWindowScroll = {
  offset: 100,
  isOffset: false,
}



const windowScrollReducer = (state: IStateWindowScroll = initialState, action: IHandleWindowScroll): IStateWindowScroll => {
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
