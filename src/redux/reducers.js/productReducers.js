import { ActionTypes } from "../constants/action-type";
import cart from "../../data";
const intialState = {
  product: cart,
  total: 0,
  amount: 0,
};

export const productReducers = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.INCREASE_QT: {
      let updateCart = state.product.map((item, index) => {
        if (item.id === payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });

      return {
        ...state,
        product: updateCart,
      };
    }

    case ActionTypes.DECREASE_QT: {
      let updateCart = state.product
        .map((item, index) => {
          if (item.id === payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);

      return {
        ...state,
        product: updateCart,
      };
    }

    case ActionTypes.CLEAR_CART:
      return { ...state, product: [], amount: 0, total: 0 };
    case ActionTypes.FETCH_CART:
      return { ...state, product: payload };

    case ActionTypes.REMOVE_PRODUCT: {
      let updateCart = state.product.filter((item) => item.id !== payload);

      return {
        ...state,
        product: updateCart,
      };
    }

    case ActionTypes.GET_TOTAL: {
      let { total, amount } = state.product.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));

      return { ...state, total, amount };
    }
    case ActionTypes.SET_PRODUCTS:
      return { ...state, ...payload };

    default:
      return state;
  }
};
