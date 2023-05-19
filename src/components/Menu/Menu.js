import MenuWrapper from "../Wrapper/MenuWrapper";
import MenuItem from "./MenuItem";

const Menu = (props) => {
  const ForwardNewMenuItem = (items) => {
    props.forwardedNewMenuItems(items)
    console.log(items)
  }

  return (
    <MenuWrapper>
      {props.items.map((expense) => (
        <MenuItem
          key={expense.id}
          id={expense.id}
          name={expense.name}
          description={expense.description}
          price={expense.price}
          // onAddNewMenuItem={ForwardNewMenuItem}s
          cartAmountChange={props.onCartAmountChange}
        />
      ))}
    </MenuWrapper>
  );
};

export default Menu;
