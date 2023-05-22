import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import React, { useState, Fragment } from "react";
import OrderButton from "../UI/Button/OrderButton";
import TotalAmount from "./TotalAmount";
import { useContext } from 'react'
import CartContext from "../../store/cart-context";

const Cart = (props) => {

  const cartCtx = useContext(CartContext);

  const addItemHandler = (item) => {
    cartCtx.addItem({...item, amount:1})
    console.log(item)
  };

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id)
  };

  let cartItems = (
    <Fragment>
    <div className={classes.backdrop} onClick={props.onChangeCartDisplay} />
    <div className={classes["cart-container"]}>
      <div className={classes["cart-items-container"]}>
        {cartCtx.items.length >= 1 ? cartCtx.items.map((item) => (
          <CartItem
            price={item.price}
            name={item.name}
            amount={item.amount}
            key={item.key}
            onAddItem={addItemHandler.bind(null, item)}
            onRemoveItem={removeItemHandler.bind(null, item.id)}
          />
        )) : <p className={classes['empty-basket']}>Basket is Empty</p>}
      </div>
      <TotalAmount />
      <OrderButton closeCartDisplay={props.onChangeCartDisplay} />
    </div>
  </Fragment>
  )

  return (
    <div>
    {cartItems}
    </div>
  );
};

export default Cart;
