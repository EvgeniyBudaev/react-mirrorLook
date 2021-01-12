import {createSelector} from 'reselect'
import {getById} from './utils'

const categoriesSelector = (state) => state.categoriesReducer.entities
const orderSelector = (state) => state.orderReducer
const productsSelector = (state) => state.productsReducer.entities

export const categoriesLoadingSelector = (state) =>
  state.categoriesReducer.loading
export const categoriesLoadedSelector = (state) =>
  state.categoriesReducer.loaded

export const productsLoadingSelector = (state, props) =>
  state.productsReducer.loading[props.categoryId]
export const productsLoadedSelector = (state, props) =>
  state.productsReducer.loaded[props.categoryId]

export const orderProductsSelector = createSelector(
  productsSelector,
  orderSelector,
  (products, order) => {
    return Object.keys(order)
      .filter((productId) => order[productId] > 0)
      .map((productId) => products[productId])
      .map((product) => ({
        product,
        amount: order[product.id],
        subtotal: order[product.id] * product.price,
      }))
  }
)

export const totalSelector = createSelector(
  orderProductsSelector,
  (orderProducts) =>
    orderProducts.reduce((acc, {subtotal}) => acc + subtotal, 0)
)

export const categoriesListSelector = createSelector(
  categoriesSelector,
  Object.values
)

export const productAmountSelector = getById(orderSelector, 0)
export const productSelector = getById(productsSelector)
