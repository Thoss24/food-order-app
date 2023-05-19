import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import React, { useState, Fragment } from "react";
import OrderButton from "../UI/Button/OrderButton";
import TotalAmount from "./TotalAmount";
import { useContext } from 'react'
import CartContext from "../../store/cart-context";

const Cart = (props) => {

  const cartCtx = useContext(CartContext);



  let cartAmount = cartCtx.items
    .map((amount) => Number(amount.price.slice(1)) * amount.amount)
    .reduce((num1, num2) => num1 + num2);

  const [currentCartTotal, setCurrentCartTotal] = useState(cartAmount);



  return (
    <Fragment>
      <div className={classes.backdrop} onClick={props.onChangeCartDisplay} />
      <div className={classes["cart-container"]}>
        <div className={classes["cart-items-container"]}>
          {cartCtx.items.map((item) => (
            <CartItem
              price={item.price}
              name={item.name}
              // amount={item.amount}
              key={item.key}
              // currentCart={props.cartItems}
            />
          ))}
        </div>
        <TotalAmount currentCartTotal={currentCartTotal} />
        <OrderButton closeCartDisplay={props.onChangeCartDisplay} />
      </div>
    </Fragment>
  );
};

export default Cart;
