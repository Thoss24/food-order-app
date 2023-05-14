import classes from "./Header.module.css";
import Button from "../UI/Button/Button";
import { Fragment } from "react";

const Header = (props) => {
  const handleForwardedModalDisplay = (isDisplaying) => {
    props.forwardedIsCartDisplaying(isDisplaying);
  };

  return (
    <Fragment>
      <div className={classes.header}>
        <h1>React Meals</h1>
        <Button forwardedModalHandler={handleForwardedModalDisplay} />
      </div>
      <div className={classes.main}>
        <img src="/images/meals.jpg" alt="food platter" />
      </div>
    </Fragment>
  );
};

export default Header;
