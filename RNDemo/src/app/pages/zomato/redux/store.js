import {combineReducers} from 'redux';
import cartReducer from './reducers/cartReducer';

const initialState = {
  isRNPage: false,
  pageName: '',
};

const zomato = (state = initialState, action) => {
  switch (action.type) {
    case 'SET/PAGE_NAME':
      return {
        ...state,
        pageName: action.data,
      };

    default:
      return {
        ...state,
      };
  }
};

const reducers = {
  zomato,
  cart: cartReducer,
};
export default combineReducers(reducers);
export const staticReducers = {...reducers};
