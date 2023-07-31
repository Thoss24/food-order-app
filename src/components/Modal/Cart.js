import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import TotalAmount from "./TotalAmount";
import { useContext } from 'react'
import CartContext from "../../store/cart-context";
import useHttp from "../hooks/use_http";
import CheckoutForm from "./CheckoutForm";

const Cart = (props) => {

  const cartCtx = useContext(CartContext);

  const { sendRequest : makeOrder } = useHttp();

  const addItemHandler = (item) => {
    cartCtx.addItem({...item, amount:1})
    console.log(item)
  };

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id)
  };

  const makeOrderHandler = async () => {

    const applyData = (data) => {
     let id = data.name
     let order = {id: id, order: cartCtx.items}

     console.log(order)
    };

    makeOrder({
      url: "https://custom-hooks-react-http-default-rtdb.europe-west1.firebasedatabase.app/order.json",
      method: 'POST',
      body: {order : cartCtx.items},
      headers: {
        'Content-Type': 'applications/json'
      }
    }, applyData)

    props.orderIsDisplaying()
    cartCtx.clearItems()

  };

  let cartItems = (
    <div className={classes.container}>
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
      <CheckoutForm sendOrder={makeOrderHandler}/>
    </div>
  </div>
  )

  return (
    <div>
    {cartItems}
    </div>
  );
};

export default Cart;
