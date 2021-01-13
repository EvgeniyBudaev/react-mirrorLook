import {replace} from 'connected-react-router'
import {
  INCREMENT,
  IS_WINDOW_SCROLL,
  DECREMENT,
  REMOVE,
  LOAD_CATEGORIES,
  LOAD_PRODUCTS,
  LOAD_PRODUCT_BY_ID,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants'

export const handleWindowScroll = (isOffset) => ({
  type: IS_WINDOW_SCROLL,
  payload: {isOffset},
})

export const increment = (id) => ({type: INCREMENT, payload: {id}})
export const decrement = (id) => ({type: DECREMENT, payload: {id}})
export const remove = (id) => ({type: REMOVE, payload: {id}})


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


