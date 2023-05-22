import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const TotalAmount = (props) => {

  const cartCtx = useContext(CartContext);

  let totalCartAmount;

  if (cartCtx.items.length === 0) {
    totalCartAmount = 0
  } else {
    totalCartAmount = cartCtx.items.map((item) => item.price.slice(1) * item.amount).reduce((startNum, nextNum) => {
      return startNum + nextNum
    });
  }

  return (
    <div>
      <h1>Total Amount</h1>
      <p>£ {totalCartAmount}</p>
    </div>
  );
};

export default TotalAmount;
