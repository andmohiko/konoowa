export type Category = {
  createdAt: string
  id: string
  name: string
  publishedAt: string
  revisedAt: string
  updatedAt: string
}

export type HeaderImage = {
  height: number
  url: string
  width: number
}

export type Article = {
  body: string
  category: Category
  description: string
  headerImage: HeaderImage
  id: string
  publishedAt: string
  revisedAt: string
  title: string
  updatedAt: string
}
