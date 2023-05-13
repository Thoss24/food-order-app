import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <div className={classes["cart-item"]}>
      <div className={classes["name-price-amount-container"]}>
        <div className={classes["name-price-container"]}>
          <h2>{props.name}</h2>
          <p>{props.price}</p>
        </div>
        <div className={classes["amount-container"]}>
          <button>{props.amount}</button>
        </div>
      </div>
      <div className={classes["add-subtract-container"]}>
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  );
};

export default CartItem;
