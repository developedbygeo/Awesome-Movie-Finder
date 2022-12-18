export const fetcher = async (url) => {
  const res = await fetch(url)

  if (!res.ok) {
    const err = new Error('An error occurred while fetching data')
    err.info = await res.json()
    err.status = res.status
    throw err
  }
  return res.json()
}

export const getTrending = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.TMDB_KEY}`
  )
  return res.json()
}

export const getPopularMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
  )
  return res.json()
}

export const getUpcomingMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
  )
  return res.json()
}

export const getPopularTV = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
  )
  return res.json()
}

export const getShowDetails = async (showId, seasonId) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${showId}/season/${seasonId}?api_key=${process.env.TMDB_KEY}&language=en-US`
  )

  const data = res.json()

  return data
}
