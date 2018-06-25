import { createBeersUrl } from './../utils/url';
import { baseUrl, defaultServiceState, defaultBeersState } from './../store/defaults';

export const beersStateReducer = (state = defaultBeersState, action) => {
  switch (action.type) {
    case 'UPDATE_BEERS_LIST':
      return {
        list: action.beers,
        isLoading: false,
      };

    case 'START_BEERS_FETCH':
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};

export const serviceStateReducer = (state = defaultServiceState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_NAME':
      return {
        ...state,
        searchName: action.searchName,
        url: createBeersUrl(
          baseUrl,
          {
            ...state,
            searchName: action.searchName,
          }
        ),
      };

    default:
      return state;
  }
};
