export const selectOptions = [
  {
    label: 'Movie',
    value: 'movie',
    slug: 'movies',
    placeholder: 'Search for more movies',
  },
  {
    label: 'TV Show',
    value: 'tv',
    slug: 'tv-series',
    placeholder: 'Search for more TV shows',
  },
];

export const platformLookup = {
  searchMovies: selectOptions[0],
  searchTv: selectOptions[1],
};
