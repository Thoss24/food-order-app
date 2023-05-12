import classes from "./MenuItem.module.css";
import React, { useState } from "react";

const MenuItem = (props) => {

  return (
    <div className={classes['menu-item-container']}>
      <div className={classes["menu-item-info"]}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>{props.price}</p>
      </div>
      <div className={classes.amount}>
        <label htmlFor="">Amount</label>
        <input type="number" min="1" defaultValue='1' max="50" />
        <button>+ Add</button>
      </div>
    </div>
  );
};

export default MenuItem;
