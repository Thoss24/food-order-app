import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import React, { Fragment } from 'react'
import OrderButton from "../UI/Button/OrderButton";

const Cart = (props) => {
  return (
    <Fragment>
    <div className={classes.backdrop}/>
    <div className={classes['cart-container']}>
    <div className={classes['cart-items-container']}>
        {props.cartItems.map((item) => (
            <CartItem price={item.price} name={item.name} amount={item.amount} key={item.key}/>
        ))}
    </div>
    <OrderButton />
    </div>
    </Fragment>
  );
};

export default Cart;
