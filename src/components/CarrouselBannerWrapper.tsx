import { getDiscoverMovies } from '@/lib/getMovies'
import React from 'react'
import CarouselBanner from './CarouselsBanner'

type Props = {
  id?: string
  keywords?: string
}

async function CarrouselBannerWrapper({ id, keywords }: Props) {
  const movies = await getDiscoverMovies(id, keywords)

  return <CarouselBanner movies={movies} />
}

export default CarrouselBannerWrapper
