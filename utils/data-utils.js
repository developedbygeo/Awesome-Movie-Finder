import tvLookup from '@/data/tv'
import movieLookup from '@/data/movies'

export const getAmbiguousProperty = (...args) => args.find((arg) => arg)

export const getTrendingSlice = (arr, start, end) => arr.slice(start, end)

export const getImage = (path, size = 'w500') => {
  if (path) return `https://image.tmdb.org/t/p/${size}${path}`
  return null
}

export const getGenre = (id, platform) => {
  if (!platform) return undefined
  if (platform === 'tv') {
    return tvLookup.find((genre) => genre.id === id).name || ''
  }
  return movieLookup.find((genre) => genre.id === id).name || ''
}

export const getDate = (date) => new Date(date).getFullYear()

export const getSlug = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')

export const formatPlatformName = (platform) =>
  platform === 'tv'
    ? platform.toUpperCase()
    : platform.charAt(0).toUpperCase() + platform.slice(1)

export const getParsedMovie = (
  imagePartialPath,
  genreCode,
  platformCode,
  dateStr,
  titleStr
) => {
  const image = getImage(imagePartialPath)
  const genre = getGenre(genreCode, platformCode)
  const date = getDate(dateStr)
  const slug = getSlug(titleStr)
  let platform
  if (platformCode) {
    platform = formatPlatformName(platformCode)
    return { image, genre, platform, date, slug }
  }
  return { image, genre, date, slug }
}

export const formatCurrency = (sum) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
    sum
  )

export const getDetailTitle = (detailObj, ...queries) =>
  queries
    .map((query) => (query in detailObj ? detailObj[query] : null))
    .filter((val) => val)[0] || undefined

export const getDetailClassname = (rating) => {
  let className
  switch (true) {
    case rating < 5:
      className = 'negative'
      break
    case rating > 5 && rating < 7.5:
      className = 'neutral'
      break
    case rating > 7.5:
      className = 'positive'
      break
    default:
      className = 'neutral'
  }
  return className
}

export const getDetailGenres = (detailObj) =>
  'genres' in detailObj ? detailObj.genres.map((el) => el.name) : ''

export const getVideoId = (videoArr) => {
  if (!videoArr) return ''
  return videoArr.find((el) => el.type === 'Trailer').key
}

export const getCertainReviews = (reviewsArr, num = 2) => {
  if (!reviewsArr) return []
  return reviewsArr.slice(0, num)
}

export const getResponsiveImage = (width, height, images) => {
  if (!images) return ''
  if (width > 800 && height > 1100) return images.landscape
  if (width >= 768 && width < 1200 && height >= 1024) return images.landscape
  if (width < 500) return images.landscape
  return images.poster
}
