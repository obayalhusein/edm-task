export interface ProductRoot {
  data: ProductData[]
  meta: ProductMeta
}

export interface ProductData {
  id: number
  attributes: ProductAttributes
}

export interface ProductAttributes {
  data?: ProductAttributes
  id: number
  title: string
  description: string
  price: number
  quantity: number
  createdAt?: string
  updatedAt?: string
  publishedAt?: string
}

export interface ProductMeta {
  pagination: ProductPagination
}

export interface ProductPagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
