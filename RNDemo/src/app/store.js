import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import ReduxThunk from 'redux-thunk';

import globalReducer from './Reducer';
import cartReducer from './pages/zomato/redux/reducers/cartReducer';

const createReducer = (asyncReducers, staticReducers) =>
  combineReducers({
    ...staticReducers,
    ...asyncReducers,
    globalReducer, // Include the globalReducer directly in combineReducers
  });

const loggerMiddleware = store => next => action => {
  if (__DEV__) { // Only log in development environment
    console.group(action.type);
    console.info('dispatching -> ', action);
    let result = next(action);
    console.log('next state -> ', store.getState());
    console.groupEnd();
    return result;
  }
  return next(action);
};

const configureMiddleware = () => {
  const defaultMiddlewares = getDefaultMiddleware();
  const commonMiddlewares = [ReduxThunk, ...defaultMiddlewares];

  return __DEV__ ? [loggerMiddleware, ...commonMiddlewares] : commonMiddlewares;
};

const _configureStore = (params = {}) => {
  const { reducer, staticReducers } = params;
  const _reducer = combineReducers({
    ...reducer,
    globalReducer,
    cart: cartReducer,
  });

  const store = configureStore({
    reducer: _reducer,
    // middleware: configureMiddleware(),
  });

  store.asyncReducers = {};
  store.staticReducer = { ...staticReducers };
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;

    if (Object.keys(store.staticReducer || {}).length) {
      store.replaceReducer(
        createReducer(store.asyncReducers, store.staticReducer),
      );
      return { isReducerInjected: true };
    }

    return { isReducerInjected: false };
  };

  return store;
};

export default _configureStore;
