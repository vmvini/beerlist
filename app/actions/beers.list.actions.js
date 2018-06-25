import axios from 'axios';

export const setSearchName = (searchName) => ({
  type: 'SET_SEARCH_NAME',
  searchName,
});

export const startBeersFetch = () => ({
  type: 'START_BEERS_FETCH',
});

export const updateBeersList = (beers) => ({
  type: 'UPDATE_BEERS_LIST',
  beers,
});

export const fetchBeers = () =>
  (dispatch, getState) => {
    dispatch(startBeersFetch());
    axios
    .get(getState().serviceState.url)
    .then((res) => dispatch(updateBeersList(res.data)));
  };
