import CartContext from "../../store/cart-context";
import { useContext } from "react";
import Cart from "./Cart";

const TotalAmount = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <div>
      <h1>Total Amount</h1>
      <p>£ {cartCtx.totalAmount}</p>
    </div>
  );
};

export default TotalAmount;
