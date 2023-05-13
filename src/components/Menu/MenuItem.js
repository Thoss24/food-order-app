import classes from "./MenuItem.module.css";
import React, { useState } from "react";

const MenuItem = (props) => {

  const [currentAmount, setCurrentAmount] = useState(1);

  const AmountChangeHandler = (event) => {
    setCurrentAmount(event.target.value)
  };

  const AddMenuItemToCart = () => {
      const newMenuItem = {
      key: Math.random().toString(),
      name: props.name,
      description: props.description,
      price: props.price,
      amount: currentAmount
    };

    props.onAddNewMenuItem(newMenuItem)
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
        <input type="number" min="1" defaultValue='1' max="50" onChange={AmountChangeHandler}/>
        <button onClick={AddMenuItemToCart}>+ Add</button>
      </div>
    </div>
  );
};

export default MenuItem;
