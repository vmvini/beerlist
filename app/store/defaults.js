export const baseUrl = 'https://api.punkapi.com/v2/beers';

export const defaultServiceState = {
  url: baseUrl,
  searchName: '',
};

export const defaultBeersState = {
  list: [],
  isLoading: false,
};

export const defaultBeerPageState = {
  beerId: null,
  isLoading: false,
  url: null,
  beer: {},
  notFound: false,
  invalidTerm: '',
};
