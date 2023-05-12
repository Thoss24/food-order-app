import MenuWrapper from "../Wrapper/MenuWrapper";
import MenuItem from "./MenuItem";

const Menu = (props) => {
  return (
    <MenuWrapper>
      {props.items.map((expense) => (
        <MenuItem
          key={expense.id}
          name={expense.name}
          description={expense.description}
          price={expense.price}
          amount={expense.amount}
        />
      ))}
    </MenuWrapper>
  );
};

export default Menu;
