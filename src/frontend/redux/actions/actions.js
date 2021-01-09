import {INCREMENT, IS_WINDOW_SCROLL, CURRENT_CATEGORY, DECREMENT, REMOVE, LOAD_CATEGORIES} from '../constants'


export const handleWindowScroll = (isOffset) => ({
  type: IS_WINDOW_SCROLL,
  payload: {isOffset}
})

export const increment = (id) => ({type: INCREMENT, payload: {id} })
export const decrement = (id) => ({type: DECREMENT, payload: {id} })
export const remove = (id) => ({type: REMOVE, payload: {id}})

export const currentCategory = (category) => ({type: CURRENT_CATEGORY, payload: {category}})

export const loadCategories = () => ({
  type: LOAD_CATEGORIES,
  CallAPI: '/api/categories'
});