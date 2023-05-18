import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import React, { useState, Fragment } from "react";
import OrderButton from "../UI/Button/OrderButton";
import TotalAmount from "./TotalAmount";

const Cart = (props) => {
  let cartAmount = props.cartItems
    .map((amount) => Number(amount.price.slice(1)) * amount.amount)
    .reduce((num1, num2) => num1 + num2);

  const [currentCartTotal, setCurrentCartTotal] = useState(cartAmount);

  const AdjustCartAmount = (event) => {
    let increasedAmount;

    let cart = props.cartItems;
    let targetItem =
      event.target.parentNode.parentNode.children[0].children[0].children[0].textContent;

    for (let i = 0; i < cart.length; i++) {
      if (targetItem === cart[i].name) {
        increasedAmount = {
          key: Math.random().toString(),
          name: cart[i].name,
          description: cart[i].description,
          price: cart[i].price,
          amount: 1,
        };
        console.log(increasedAmount);
      }
    }

    props.increaseMenuItemAmount(increasedAmount)
    setCurrentCartTotal(cartAmount);
    console.log(cartAmount)
  };

  return (
    <Fragment>
      <div className={classes.backdrop} onClick={props.onChangeCartDisplay} />
      <div className={classes["cart-container"]}>
        <div className={classes["cart-items-container"]}>
          {props.cartItems.map((item) => (
            <CartItem
              price={item.price}
              name={item.name}
              amount={item.amount}
              key={item.key}
              currentCart={props.cartItems}
              onAdjustCartAmount={AdjustCartAmount}
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
