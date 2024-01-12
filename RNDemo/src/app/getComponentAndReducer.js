import {PAGE_NAMES} from './constants';
import configureStore from './store';

export const getComponentAndReducer = key_id => {
  let Component = null;
  let reducer = null;
  let staticReducers = null;

  switch (key_id) {
    case PAGE_NAMES.OUTLOOK: {
      Component = require('./pages/outlook').default;
      reducer = require('./pages/outlook/reducer').reducers;
      staticReducers = require('./pages/outlook/reducer').staticReducers;
      break;
    }
    case PAGE_NAMES.ZOMATO: {
      Component = require('./pages/zomato').default;
      reducer = require('./pages/zomato/redux/store').default;
      staticReducers = require('./pages/zomato/redux/store').staticReducers;
      break;
    }
    case PAGE_NAMES.NETFLIX: {
      Component = require('./pages/netflix').default;
      break;
    }
    case PAGE_NAMES.TIMER: {
      Component = require('./pages/test/Timer').default;
      break;
    }
    case PAGE_NAMES.PAGINATION: {
      Component = require('./pages/test/Pagination').default;
      break;
    }
    default: {
      Component = require('./pages/default').default;
      // reducer = require('./pages/default/reducer').reducers;
      // break;
      break;
    }
  }

  const store = configureStore({reducer, staticReducers});
  return {Component, store};
};
