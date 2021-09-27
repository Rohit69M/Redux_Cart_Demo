import React, { useState } from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  getTotal,
  fetchCart,
} from "../../redux/actions/productActions";
import { useEffect } from "react";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { product: cart, total } = useSelector((state) => state.allProduct);
  const [clear, setClear] = useState(false);

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  return (
    <section className="cart">
      <header>
        <h2>your bag </h2>
      </header>

      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        {!clear && (
          <button
            className="btn clear-btn"
            onClick={() => {
              dispatch(clearCart());
              setClear(true);
            }}
          >
            clear cart
          </button>
        )}
        {clear && (
          <button
            className="btn clear-btn"
            onClick={() => {
              dispatch(fetchCart());
              setClear(false);
            }}
          >
            Fetch cart
          </button>
        )}
      </footer>
    </section>
  );
};

export default CartContainer;
