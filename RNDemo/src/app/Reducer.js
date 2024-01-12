const initialState = {
  isRNPage: false,
  pageName: '',
};

const Reducer = (state = initialState, action) => {
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

export default Reducer;
