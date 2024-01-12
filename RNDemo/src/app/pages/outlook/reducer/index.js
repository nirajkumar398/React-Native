import { combineReducers } from "redux";

const initialState = {
  isRNPage: false,
  pageName: '',
};

const outlook = (state = initialState, action) => {
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
  outlook,
};
export default combineReducers(reducers);
export const staticReducers = {...reducers};
