export const getSymbol = (url) => {
  if (hasParam(url)) return '&';
  return '?';
};

export const hasParam = (url) => url.indexOf('?') !== -1;

export const updateURL = (url, fragment) => url + getSymbol(url) + fragment;

export const createSingleBeerUrl = (baseUrl, state) => `${baseUrl}/${state.beerId}`;

export const createBeersUrl = (baseUrl, state) => {
  let searchName;
  let url = baseUrl;

  if (state.searchName) {
    searchName = `beer_name=${state.searchName}`;
    url = updateURL(url, searchName);
  }

  return url;
};
