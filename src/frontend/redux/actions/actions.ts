import {replace} from 'connected-react-router'
import { createAsyncAction } from 'typesafe-actions'
import axios from 'axios'
import {Dispatch} from "redux"
import {
  PRODUCT_INCREMENT,
  IS_WINDOW_SCROLL,
  PRODUCT_DECREMENT,
  PRODUCT_REMOVE,
  LOAD_CATEGORIES,
  LOAD_PRODUCTS,
  LOAD_REVIEWS,
  LOAD_USERS,
  REQUEST,
  SUCCESS,
  FAILURE,
  ADD_REVIEW,
  SEARCH_PRODUCT,
  FILTER_PRODUCT, LOAD_PRODUCT_BY_ID_REQUEST, LOAD_PRODUCT_BY_ID_SUCCESS, LOAD_PRODUCT_BY_ID_FAILURE
} from '../constants'
import {reviewsLoadedSelector, reviewsLoadingSelector, usersLoadedSelector, usersLoadingSelector} from '../selectors'
import {
  AppThunk,
  GetStateType, IHandleWindowScroll,
  IProduct,
  IReview,
  ProductByIdThunk,
  ProductByIdTypes, ProductDecrementType, ProductIncrementType, ProductRemoveType
} from '../types'



export const handleWindowScroll = (isOffset: boolean): IHandleWindowScroll => ({
  type: IS_WINDOW_SCROLL,
  payload: {isOffset},
})


export const productIncrement: ProductIncrementType = (id) => ({type: PRODUCT_INCREMENT, payload: {id}})

export const productDecrement: ProductDecrementType = (id) => ({type: PRODUCT_DECREMENT, payload: {id}})

export const productRemove: ProductRemoveType = (id) => ({type: PRODUCT_REMOVE, payload: {id}})


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



const fetchProductByIdAsync = createAsyncAction(
  LOAD_PRODUCT_BY_ID_REQUEST,
  LOAD_PRODUCT_BY_ID_SUCCESS,
  LOAD_PRODUCT_BY_ID_FAILURE,
)<void, Array<IProduct>, Error>();

export const loadProductById = (productId: string): ProductByIdThunk => async (dispatch: Dispatch<ProductByIdTypes>) => {
  dispatch({type: LOAD_PRODUCT_BY_ID_REQUEST, productId})
  try {
    const response = await fetch(
      `/api/products?id=${productId}`
    ).then((res) => res.json())
    const productObj = response.find((product: IProduct) => product.id === productId)
    const product: Array<IProduct> = []
    product.push(productObj)
    dispatch({type: LOAD_PRODUCT_BY_ID_SUCCESS, product, productId})
  } catch (error) {
    dispatch({type: LOAD_PRODUCT_BY_ID_FAILURE, productId, error})
    //dispatch(replace('/error'))
  }
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
  const loading = usersLoadingSelector(state)
  const loaded = usersLoadedSelector(state)

  if (loading || loaded) return

  dispatch({type: LOAD_USERS, CallAPI: '/api/users'})
}


interface IAddReviewActionPayload {
  review: IReview,
  productId: string,
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





