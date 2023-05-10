import classes from "./Header.module.css";
import Button from "../UI/Button/Button";

const Header = () => {
  return (
      <div>
      <div className={classes.header}>
        <h1>React Meals</h1>
        <Button />
        </div>
      <div className={classes.main}>
        <img src="/images/meals.jpg" alt="food platter" />
      </div>
    </div>
  );
};

export default Header;
