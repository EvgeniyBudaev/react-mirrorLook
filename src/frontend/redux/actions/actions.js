import {IS_WINDOW_SCROLL} from '@/frontend/redux/constants'

export const handleWindowScroll = (isOffset) => ({
  type: IS_WINDOW_SCROLL,
  payload: isOffset
})
