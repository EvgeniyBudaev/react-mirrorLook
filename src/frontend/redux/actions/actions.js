import {INCREMENT, IS_WINDOW_SCROLL, CURRENT_CATEGORY} from '../constants'


export const handleWindowScroll = (isOffset) => ({
  type: IS_WINDOW_SCROLL,
  payload: {isOffset}
})

export const increment = (id) => ({type: INCREMENT, payload: {id}})

export const currentCategory = (category) => ({type: CURRENT_CATEGORY, payload: {category}})
