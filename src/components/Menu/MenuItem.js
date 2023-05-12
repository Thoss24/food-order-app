import classes from "./MenuItem.module.css";

const MenuItem = (props) => {
  return (
    <div>
      <div className={classes["menu-item-info"]}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>{props.price}</p>
      </div>
      <div className={classes.amount}>
        <input type="number" value={props.amount} min="1" max="50" />
      </div>
    </div>
  );
};

export default MenuItem;
