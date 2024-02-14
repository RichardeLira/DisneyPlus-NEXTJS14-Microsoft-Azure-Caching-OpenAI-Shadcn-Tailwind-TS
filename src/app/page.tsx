import CarrouselBannerWrapper from '@/components/CarrouselBannerWrapper'
import MoviesCorrousel from '@/components/MoviesCorrousel'
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '@/lib/getMovies'

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies()
  const topRatedMovies = await getTopRatedMovies()
  const popularMovies = await getPopularMovies()

  return (
    <main className="">
      <CarrouselBannerWrapper />

      <div className="flex flex-col space-y-2 xl:-mt-48 ">
        <MoviesCorrousel
          movies={upcomingMovies}
          title="Upcoming"
        ></MoviesCorrousel>
        <MoviesCorrousel
          movies={topRatedMovies}
          title="Top Rated"
        ></MoviesCorrousel>
        <MoviesCorrousel
          movies={popularMovies}
          title="Popular"
        ></MoviesCorrousel>
      </div>
    </main>
  )
}
