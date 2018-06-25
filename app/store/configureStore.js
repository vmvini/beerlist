import thunk from 'redux-thunk';

import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';

import {
  serviceStateReducer,
  beersStateReducer,
  beerPageStateReducer,
} from './../reducers';

export const configureStore = () => {
  const reducer = combineReducers({
    beersState: beersStateReducer,
    serviceState: serviceStateReducer,
    beerPageState: beerPageStateReducer,
  });

  const store = createStore(
    reducer,
    compose(applyMiddleware(thunk))
  );

  return store;
};
