import {createSelector} from 'reselect'

export const arrToMap = (arr) =>
  arr.reduce((acc, item) => ({...acc, [item.id]: item}), {})


export const getById = (selector, defaultValue) =>
  createSelector(
    selector,
    (_, props) => props.id,
    (entity, id) => entity[id] || defaultValue
  )

export const breadcrumbsTranslate = (name = '') => {
  switch (name) {
    case 'basket':
      return name = 'Корзина'
    case 'catalog':
      return name = 'Каталог'
    case 'about':
      return name = 'О магазине'
    case 'venetian-mirrors':
      return name = 'Венецианские зеркала'
    case 'floor-mirrors':
      return name = 'Напольные зеркала'
    case 'frame_mirrors':
      return name = 'Зеркала в рамах'
    case 'mirror_panels':
      return  name = 'Зеркальные панно'
    case 'mirrors_sun':
      return  name = 'Зеркало-солнце'
    case 'consoles':
      return  name = 'Консоли'
    default:
      return name
  }
}
