import {parse} from 'query-string'

export const limit = 1

export const getPaginator = search => {
  const parsedSearch = parse(search)
  const currentPage = parsedSearch.page ? Number(parsedSearch.page) : 1
  const offset = currentPage * 1 - limit
  return {currentPage, offset}
}
