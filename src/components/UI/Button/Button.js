import classes from "./Button.module.css";
import { FaShoppingCart } from "react-icons/fa";
import React, { useState } from "react";

const Button = (props) => {
  const [isCartDisplaying, setIsCartDisplaying] = useState(true);

  const buttonHandler = () => {
    props.forwardedModalHandler(isCartDisplaying)
  };

  return (
    <button className={classes.button} onClick={buttonHandler}>
      <FaShoppingCart /> Your Cart
    </button>
  );
};

export default Button;
