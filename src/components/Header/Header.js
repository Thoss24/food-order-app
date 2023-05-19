import classes from "./Header.module.css";
import Button from "../UI/Button/Button";
import { Fragment, useContext } from "react";
import CartContext from "../../store/cart-context";

const Header = (props) => {
  const handleForwardedModalDisplay = (isDisplaying) => {
    props.forwardedIsCartDisplaying(isDisplaying);
  };

  const crtCtx = useContext(CartContext);

  const numberOfCartItems = crtCtx.items.reduce((currentNum, currentItem) => {
    return currentNum + currentItem.amount
  }, 0);

  return (
    <Fragment>
      <div className={classes.header}>
        <h1>React Meals</h1>
        <Button forwardedModalHandler={handleForwardedModalDisplay} cartAmount={numberOfCartItems}/>
      </div>
      <div className={classes.main}>
        <img src="/images/meals.jpg" alt="food platter" />
      </div>
    </Fragment>
  );
};

export default Header;
