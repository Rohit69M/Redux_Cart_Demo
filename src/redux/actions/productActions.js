import { ActionTypes } from "../constants/action-type";
import axios from "axios";
import cart from "../../data";

export const increaseQt = (id) => {
  return {
    type: ActionTypes.INCREASE_QT,
    payload: id,
  };
};

export const decreaseQt = (id) => {
  return {
    type: ActionTypes.DECREASE_QT,
    payload: id,
  };
};

export const clearCart = (id) => {
  return {
    type: ActionTypes.CLEAR_CART,
  };
};

export const removeProduct = (id) => {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: id,
  };
};

export const getTotal = (data) => {
  return {
    type: ActionTypes.GET_TOTAL,
    payload: data,
  };
};

export const sendData = (data) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://store-a9094-default-rtdb.firebaseio.com/art.json",
      {
        method: "PUT",
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      throw new Error("sending cart data failed");
    }
  };
};

export const setProduct = (data) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: data,
  };
};
export const fetchCart = () => {
  return {
    type: ActionTypes.FETCH_CART,
    payload: cart,
  };
};
export const getData = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://store-a9094-default-rtdb.firebaseio.com/art.json"
    );

    const data = await response.json();
    if (data === null) {
      console.log("null");
    }
    if (!response.ok) {
      console.log("null");
    }
    dispatch(setProduct(data));
  };
};
