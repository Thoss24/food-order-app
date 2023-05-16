import classes from "./CartItem.module.css";
import React, { useState } from "react";

const CartItem = (props) => {
  const [currentCartTotal, setCurrentCartTotal] = useState();

  const TotalCartAmount = () => {
    let cartAmount = props.currentCart
      .map((amount) => Number(amount.price.slice(1)))
      .reduce((num1, num2) => num1 + num2);

      setCurrentCartTotal(cartAmount)
      console.log(currentCartTotal)
  };

  return (
    <div className={classes["cart-item"]}>
      <div className={classes["name-price-amount-container"]}>
        <div className={classes["name-price-container"]}>
          <h2 className={classes.name}>{props.name}</h2>
          <p className={classes.price}>{props.price}</p>
        </div>
        <div className={classes["amount-container"]}>
          <button>x {props.amount}</button>
        </div>
      </div>
      <div className={classes["add-subtract-container"]}>
        <button onClick={TotalCartAmount}>-</button>
        <button onClick={TotalCartAmount}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
