import {IS_WINDOW_SCROLL} from '../constants'


export const handleWindowScroll = (isOffset) => ({
  type: IS_WINDOW_SCROLL,
  payload: {isOffset}
})
