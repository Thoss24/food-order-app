import classes from "./MenuItem.module.css";
import React, { useRef } from "react";
import { useContext } from 'react'
import CartContext from "../../store/cart-context";

const MenuItem = (props) => {

  const cartCtx = useContext(CartContext);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const currentAmount = amountInputRef.current.value;
    const currentAmountNumber = +currentAmount

    cartCtx.addItem({
      id: props.id,
      name: props.name, 
      price: props.price,
      amount: currentAmountNumber,
    });

    console.log(props.name, props.price)
  };

  return (
    <form className={classes['menu-item-container']} onSubmit={submitHandler}>
      <div className={classes["menu-item-info"]}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>{props.price}</p>
      </div>
      <div className={classes.amount}>
        <label htmlFor="">Amount</label>
        <input type="number" min="1" defaultValue="1" max="50" ref={amountInputRef}/>
        <button>+ Add</button>
      </div>
    </form>
  );
};

export default MenuItem;
