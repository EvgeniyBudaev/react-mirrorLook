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
  ADD_REVIEW,
  SEARCH_PRODUCT,
  FILTER_PRODUCT
} from '../constants'
import {reviewsLoadedSelector, reviewsLoadingSelector, usersLoadedSelector, usersLoadingSelector} from '../selectors'
import {Dispatch, Action} from 'redux'
import {RootStateType} from '../reducers'
import {ThunkAction} from 'redux-thunk'
import {AppThunk, GetStateType, IProduct} from '../types'

export const handleWindowScroll = (isOffset:any) => ({
  type: IS_WINDOW_SCROLL,
  payload: {isOffset},
})


type ProductIncrementActionPayloadType = {
  id: string,
}
type ProductIncrementActionType = {
  type: typeof PRODUCT_INCREMENT,
  payload: ProductIncrementActionPayloadType
}
export type ProductIncrement = (id: string) => ProductIncrementActionType
export const productIncrement: ProductIncrement = (id) => ({type: PRODUCT_INCREMENT, payload: {id}})


type ProductDecrementActionPayloadType = {
  id: string
}
type ProductDecrementActionType = {
  type: typeof PRODUCT_DECREMENT,
  payload: ProductDecrementActionPayloadType
}
export type ProductDecrement = (id: string) => ProductDecrementActionType
export const productDecrement: ProductDecrement = (id) => ({type: PRODUCT_DECREMENT, payload: {id}})


type ProductRemoveActionType = {
  type: typeof PRODUCT_REMOVE,
  payload: {id: string}
}
export type ProductRemove = (id: string) => ProductRemoveActionType
export const productRemove: ProductRemove = (id) => ({type: PRODUCT_REMOVE, payload: {id}})


export type LoadCategoriesActionType = {
  CallAPI: string,
  type: typeof LOAD_CATEGORIES
}
export const loadCategories = (): LoadCategoriesActionType => ({
  type: LOAD_CATEGORIES,
  CallAPI: '/api/categories',
})


type LoadProductsActionType = {
  type: string,
  CallAPI: string,
  categoryId: string
}
export const loadProducts = (categoryId: string, stringifiedParams: any): LoadProductsActionType => ({
  type: LOAD_PRODUCTS,
  CallAPI: `/api/products?id=${categoryId}?${stringifiedParams}`,
  categoryId,
})



export interface ILoadProductByIdAction {
  type: typeof LOAD_PRODUCT_BY_ID
  productId: string,
  product: Array<IProduct>,
  error: object
}

export type ActionsType =  ILoadProductByIdAction


export const loadProductById = (productId: string): AppThunk => async (dispatch) => {
  dispatch({type: LOAD_PRODUCT_BY_ID + REQUEST, productId})
  try {
    const response = await fetch(
      `/api/products?id=${productId}`
    ).then((res) => res.json())
    const productObj = response.find((product: any) => product.id === productId)
    const product = []
    product.push(productObj)
    dispatch({type: LOAD_PRODUCT_BY_ID + SUCCESS, product, productId})
  } catch (error) {
    dispatch({type: LOAD_PRODUCT_BY_ID + FAILURE, error, productId})
    dispatch(replace('/error'))
  }
}

interface IReview {
  id: string,
  user: string,
  userId: string,
  text: string,
  rating: number,
}
interface ILoadReviewsAction {
  type: typeof LOAD_REVIEWS
  productId: string,
  product: Array<IReview>,
  error: object
}
export const loadReviews = (productId: string): AppThunk => async (dispatch, getState: GetStateType) => {
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

export const loadUsers = () => async (dispatch: any, getState: any) => {
  const state = getState()
  //console.log('[actions][loadUsers][state]', state)
  const loading = usersLoadingSelector(state)
  const loaded = usersLoadedSelector(state)

  if (loading || loaded) return

  dispatch({type: LOAD_USERS, CallAPI: '/api/users'})
}


interface IAddReviewActionPayload {
  review: IReview,
  productId: string
}
export interface IAddReviewAction {
  type: typeof ADD_REVIEW,
  payload: IAddReviewActionPayload,
  generateId: Array<string>
}
export const addReview = (review: IReview, productId: string): IAddReviewAction => ({
  type: ADD_REVIEW,
  payload: {review, productId},
  generateId: ['reviewId', 'userId'],
})



export const searchProduct = (text: string) => (dispatch: any) => {
  dispatch({
    type: SEARCH_PRODUCT,
    payload: text
  })
}



export const filterProduct = (checked: any) => (dispatch: any) => {
  dispatch({
    type: FILTER_PRODUCT,
    payload: checked
  })
}





