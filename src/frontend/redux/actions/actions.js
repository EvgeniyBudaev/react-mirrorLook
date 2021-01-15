import {replace} from 'connected-react-router'
import {
  PRODUCT_INCREMENT,
  IS_WINDOW_SCROLL,
  PRODUCT_DECREMENT,
  PRODUCT_REMOVE,
  LOAD_CATEGORIES,
  LOAD_PRODUCTS,
  LOAD_PRODUCT_BY_ID,
  LOAD_REVIEWS,
  LOAD_USERS,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants'
import {reviewsLoadedSelector, reviewsLoadingSelector, usersLoadedSelector, usersLoadingSelector} from '../selectors'

export const handleWindowScroll = (isOffset) => ({
  type: IS_WINDOW_SCROLL,
  payload: {isOffset},
})

export const productIncrement = (id) => ({type: PRODUCT_INCREMENT, payload: {id}})
export const productDecrement = (id) => ({type: PRODUCT_DECREMENT, payload: {id}})
export const productRemove = (id) => ({type: PRODUCT_REMOVE, payload: {id}})


export const loadCategories = () => ({
  type: LOAD_CATEGORIES,
  CallAPI: '/api/categories',
})

export const loadProducts = (categoryId, stringifiedParams) => ({
  type: LOAD_PRODUCTS,
  CallAPI: `/api/products?id=${categoryId}?${stringifiedParams}`,
  categoryId,
})

export const loadProductById = (productId) => async dispatch => {
  dispatch({type: LOAD_PRODUCT_BY_ID + REQUEST, productId})
  try {
    const response = await fetch(
      `/api/products?id=${productId}`
    ).then((res) => res.json())
    const productObj = response.find(product => product.id === productId)
    const product = []
    product.push(productObj)
    dispatch({type: LOAD_PRODUCT_BY_ID + SUCCESS, product, productId})
  } catch (error) {
    dispatch({type: LOAD_PRODUCT_BY_ID + FAILURE, error, productId})
    dispatch(replace('/error'))
  }
}

export const loadReviews = (productId) => async (dispatch, getState) => {
  const state = getState()
  const loading = reviewsLoadingSelector(state, {productId})
  const loaded = reviewsLoadedSelector(state, {productId})

  if (loading || loaded) return
  dispatch({type: LOAD_REVIEWS + REQUEST, productId})
  try {
    const response = await fetch(
      `/api/reviews?id=${productId}`
    ).then((res) => res.json())
    dispatch({type: LOAD_REVIEWS + SUCCESS, response, productId})
  } catch (error) {
    dispatch({type: LOAD_REVIEWS + FAILURE, error, productId})
    dispatch(replace('/error'))
  }
}

export const loadUsers = () => async (dispatch, getState) => {
  const state = getState()
  const loading = usersLoadingSelector(state)
  const loaded = usersLoadedSelector(state)

  if (loading || loaded) return

  dispatch({type: LOAD_USERS, CallAPI: '/api/users'})
}


