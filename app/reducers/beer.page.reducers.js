import { createSingleBeerUrl } from './../utils/url';
import { defaultBeerPageState, baseUrl } from './../store/defaults';

export const beerPageStateReducer = (state = defaultBeerPageState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_BEER':
      return {
        ...state,
        beerId: action.id,
        url: createSingleBeerUrl(baseUrl, { beerId: action.id }),
        notFound: false,
        invalidTerm: '',
      };

    case 'START_SINGLE_BEER_FETCH':
      return {
        ...state,
        isLoading: true,
      };

    case 'UPDATE_SINGLE_BEER':
      return {
        ...state,
        isLoading: false,
        beer: action.beer,
      };

    case 'SET_BEER_NOT_FOUND':
      return {
        ...state,
        invalidTerm: action.term,
        notFound: true,
        isLoading: false,
        beer: {},
        beerId: null,
      };

    default: return state;

  }
};
