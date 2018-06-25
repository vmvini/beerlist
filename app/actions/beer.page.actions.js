import axios from 'axios';

export const setBeerNotFound = (term) => ({
  type: 'SET_BEER_NOT_FOUND',
  term,
});

export const setCurrentBeer = (id) => ({
  type: 'SET_CURRENT_BEER',
  id,
});

export const startSingleBeerFetch = () => ({
  type: 'START_SINGLE_BEER_FETCH',
});

export const updateSingleBeer = (beer) => ({
  type: 'UPDATE_SINGLE_BEER',
  beer,
});

export const fetchSingleBeer = () =>
  (dispatch, getState) => {
    dispatch(startSingleBeerFetch());
    axios
    .get(getState().beerPageState.url)
    .then((res) => {
      if (res.data.length > 0) {
        dispatch(updateSingleBeer(res.data[0]));
      } else {
        dispatch(setBeerNotFound(getState().beerPageState.beerId));
      }
    },
    () => {
      dispatch(setBeerNotFound(getState().beerPageState.beerId));
    });
  };
