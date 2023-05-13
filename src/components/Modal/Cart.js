import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  return (
    <div className={classes['cart-container']}>
        {props.cartItems.map((item) => (
            <CartItem price={item.price} name={item.name} amount={item.amount} key={item.key}/>
        ))}
    </div>
  );
};

export default Cart;
