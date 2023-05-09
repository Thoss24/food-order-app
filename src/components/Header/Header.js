import classes from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <div className={classes.header}>
        <h1>React Meals</h1>
        <button>Your Cart</button>
      </div>
      <div className={classes.main}>
        <img src="/images/meals.jpg" alt="food platter" />
      </div>
    </div>
  );
};

export default Header;
