import apiClient from './apiClient'

export type HomepageCarouselItem = {
  _id: string
  image: string
  title: string
  body: string
  url: string
  createdAt: string
}

export type HomepageCarouselList = HomepageCarouselItem[]

const getHomepageCarousel = () =>
  apiClient.get<HomepageCarouselList>('/homepage-carousel')

const homepageCarouselService = {
  getHomepageCarousel
}
export default homepageCarouselService
