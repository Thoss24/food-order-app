import classes from "./MenuItem.module.css";
import React, { useState, useRef } from "react";
import { useContext } from 'react'
import CartContext from "../../store/cart-context";

const MenuItem = (props) => {

  const cartCtx = useContext(CartContext);

  const amountInputRef = useRef();

  const [currentAmount, setCurrentAmount] = useState(1);

  const AmountChangeHandler = (event) => {
    setCurrentAmount(event.target.value)
  };

  const submitHandler = () => {
    //   const newMenuItem = {
    //   key: Math.random().toString(),
    //   name: props.name,
    //   description: props.description,
    //   price: props.price,
    //   amount: currentAmount
    // };

    // props.onAddNewMenuItem(newMenuItem);

    const currentAmount = amountInputRef.current.value;
    const currentAmountNumber = +currentAmount

    cartCtx.addItem({
      id: props.id,
      name: props.name, 
      price: props.price,
      amount: currentAmountNumber,
    })

  };

  return (
    <div className={classes['menu-item-container']}>
      <div className={classes["menu-item-info"]}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>{props.price}</p>
      </div>
      <div className={classes.amount}>
        <label htmlFor="">Amount</label>
        <input type="number" min="1" defaultValue='1' max="50" ref={amountInputRef} onChange={AmountChangeHandler}/>
        <button onClick={submitHandler}>+ Add</button>
      </div>
    </div>
  );
};

export default MenuItem;
