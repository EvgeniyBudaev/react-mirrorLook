import {ThunkAction} from 'redux-thunk'
import {RootStateType} from './reducers'
import {Action} from 'redux'

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

export interface IReviewId {
  reviewId: string
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStateType,
  unknown,
  Action<string>
  >

export type GetStateType = () => RootStateType