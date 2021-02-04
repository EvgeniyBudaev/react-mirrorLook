import {ThunkAction} from 'redux-thunk'
import {RootStateType} from './reducers'
import {Action} from 'redux'
import {ADD_REVIEW, LOAD_PRODUCT_BY_ID_FAILURE, LOAD_PRODUCT_BY_ID_REQUEST, LOAD_PRODUCT_BY_ID_SUCCESS} from './constants'

export interface ILoading {
  [productId: string]: boolean
}

export interface ILoaded {
  [productId: string]: boolean
}

export interface IProduct {
  id: string,
  name: string,
  price: number,
  images: string,
}

export interface IReview {
  id: string,
  user: string,
  userId: string,
  text: string,
  rating: number,
}

export interface IReviewId {
  reviewId: string
}

export type IFailure = {
  error: Error
}

export type LoadProductByIdRequestType = {
  type: typeof LOAD_PRODUCT_BY_ID_REQUEST,
  productId: string
}

export type LoadProductByIdSuccessType = {
  type: typeof LOAD_PRODUCT_BY_ID_SUCCESS,
  product: Array<IProduct>,
  productId: string
}

export type LoadProductByIdFailureType = {
  type: typeof LOAD_PRODUCT_BY_ID_FAILURE,
  error: IFailure,
  productId: string
}

interface IAddReviewActionPayload {
  review: IReview,
  productId: string
}

export type AddReviewType = {
  type: typeof ADD_REVIEW,
  payload: IAddReviewActionPayload,
  generateId: Array<string>,
}

export type ProductByIdThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStateType,
  unknown,
  Action<ProductByIdTypes>
  >

export type ProductByIdTypes = LoadProductByIdRequestType | LoadProductByIdSuccessType | LoadProductByIdFailureType | AddReviewType

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStateType,
  unknown,
  Action<string>
  >

export type GetStateType = () => RootStateType