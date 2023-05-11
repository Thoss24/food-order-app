import classes from "./Header.module.css";
import Button from "../UI/Button/Button";
import { Fragment } from 'react';

const Header = () => {
  return (
    <Fragment>
      <div className={classes.header}>
        <h1>React Meals</h1>
        <Button />
        </div>
      <div className={classes.main}>
        <img src="/images/meals.jpg" alt="food platter" />
      </div>
    </Fragment>
  );
};

export default Header;
