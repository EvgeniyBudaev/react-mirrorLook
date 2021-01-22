import {createSelector} from 'reselect'
import {getById} from './utils'

const categoriesSelector = (state) => state.categoriesReducer.entities
const orderSelector = (state) => state.orderReducer
export const productsSelector = (state) => state.productsReducer.entities
export const reviewsSelector = (state) => state.reviewsReducer.entities
const usersSelector = (state) => state.usersReducer.entities
export const searchSelector = (state) => state.searchReducer.entities
export const filterSelector = (state) => state.filterReducer.entities

export const categoriesLoadingSelector = (state) =>
  state.categoriesReducer.loading
export const categoriesLoadedSelector = (state) =>
  state.categoriesReducer.loaded

export const productsLoadingSelector = (state, props) =>
  state.productsReducer.loading[props.categoryId]
export const productsLoadedSelector = (state, props) =>
  state.productsReducer.loaded[props.categoryId]

export const productLoadingSelector = (state, props) =>
  state.productReducer.loading[props.productId]
export const productLoadedSelector = (state, props) =>
  state.productReducer.loaded[props.productId]

export const reviewsLoadingSelector = (state, props) =>
  state.reviewsReducer.loading[props.productId]
export const reviewsLoadedSelector = (state, props) =>
  state.reviewsReducer.loaded[props.productId]

export const usersLoadingSelector = (state) => state.usersReducer.loading
export const usersLoadedSelector = (state) => state.usersReducer.loaded

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
const reviewSelector = getById(reviewsSelector)


export const productByIdSelector = (state, props) => state.productReducer.entities[props.productId]
export const productAmountByIdSelector = (state, props) => state.orderReducer[props.product.id]

export const reviewWitUserSelector = createSelector(
  reviewSelector,
  usersSelector,
  (review, users) => ({
    ...review,
    user: users[review.userId]?.name,
  })
)

export const searchProductsByAllSelector = createSelector(
  productsSelector,
  searchSelector,
  (productsAllByHashMap, search) => {
    if (productsAllByHashMap.length !== 0) {
      const productsAll = Object.values(productsAllByHashMap)
      const searchProductsByAll = productsAll.filter(item => {
        return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
      })
      return searchProductsByAll
    }
  }
)

export const filterProductsByAllIdSelector = createSelector(
  productsSelector,
  filterSelector,
  (productsAllByHashMap, filter) => {
    if (productsAllByHashMap.length !== 0) {
      const productsAll = Object.values(productsAllByHashMap)
      const filterProductsByAll = productsAll.filter(item => {
        return item.name.toLowerCase().indexOf(filter.toLowerCase()) > -1;
      })
      const filterProductsByAllId = filterProductsByAll.map(item => item.id)
      return filterProductsByAllId
    }
  }
)

