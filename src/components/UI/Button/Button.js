import classes from "./Button.module.css";
import { FaShoppingCart } from "react-icons/fa";
import React, { useState, useEffect, useContext } from "react";
import CartContext from "../../../store/cart-context";

const Button = (props) => {
  const [isCartDisplaying, setIsCartDisplaying] = useState(true);
  const [cartChanged, setCartChanged] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx

  const buttonHandler = () => {
    props.forwardedModalHandler(isCartDisplaying)
  };

  const buttonClass = `${classes.button} ${cartChanged ? classes.change : ''}`;

  useEffect(() => {
    setCartChanged(true)

    const timer = setTimeout(() => {
      setCartChanged(false)
    }, 300);

    return () => {
      clearTimeout(timer)
    };
  }, [items])

  return (
    <button className={buttonClass} onClick={buttonHandler}>
    <FaShoppingCart /> Your Cart
    <div className={classes.amount}>{props.cartAmount}</div>
  </button>
  );
};

export default Button;
