import cartActions from '../actions/cartActions';

const initialState = {cartData: []};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActions.ADD_CART_DATA:
      const existingItemIndex = state.cartData.findIndex(
        item => item.id === action.data.id,
      );
      if (existingItemIndex !== -1) {
        const updatedCartData = state.cartData.map((item, index) =>
          index === existingItemIndex
            ? {...item, quantity: item.quantity + 1}
            : item,
        );
        return {
          ...state,
          cartData: updatedCartData,
        };
      }
      return {
        ...state,
        cartData: [...state.cartData, {...action.data, quantity: 1}],
      };
    case cartActions.REMOVE_CART_DATA:
      const indexToRemove = state.cartData.findIndex(
        item => item.id === action.data.id,
      );
      if (indexToRemove !== -1) {
        const updatedCartData = state.cartData.map((item, index) =>
          index === indexToRemove && item.quantity > 1
            ? {...item, quantity: item.quantity - 1}
            : item,
        );
        if (state.cartData[indexToRemove].quantity === 1) {
          updatedCartData.splice(indexToRemove, 1);
        }
        return {
          ...state,
          cartData: updatedCartData,
        };
      }
      return state;
    case cartActions.REMOVE_CART_DATA:
      return initialState;
    default:
      return state;
  }
};

export default cartReducer;
