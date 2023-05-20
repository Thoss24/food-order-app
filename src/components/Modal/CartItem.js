import classes from "./CartItem.module.css";

const CartItem = (props) => {

  return (
    <div className={classes["cart-item"]}>
      <div className={classes["name-price-amount-container"]}>
        <div className={classes["name-price-container"]}>
          <h2 className={classes.name}>{props.name}</h2>
          <p className={classes.price}>{props.price}</p>
        </div>
        <div className={classes["amount-container"]}>
          <button>x {props.amount}</button>
        </div>
      </div>
      <div className={classes["add-subtract-container"]}>
        <button onClick={props.onRemoveItem}>-</button>
        <button onClick={props.onAddItem}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
