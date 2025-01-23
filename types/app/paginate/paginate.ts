export interface Paginate {
  currentPage: number
  totalPages: number
  perPage: number
  countRecords: number
  totalRecords: number
}

export interface Paginated<T> {
  data: T[]
  paginate: Paginate
}

export interface PaginatePageQuery {
  query: {
    page: number
  }
}
