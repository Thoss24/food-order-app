import Header from "./components/Header/Header";
import { Fragment } from "react";
import Body from "./components/Wrapper/Body";
import Banner from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Modal/Cart";

const MenuItems = [
  {
    id: Math.random().toString(),
    name: "Sushi",
    description:
      "A variety of fresh fish such as salmon, tuna, bass and mackerel",
    price: "£15.00",
  },
  {
    id: Math.random().toString(),
    name: "Burger",
    description: "Fresh beef with mature cheddar cheese",
    price: "£12.00",
  },
  {
    id: Math.random().toString(),
    name: "Ramen",
    description: "Pork bone broth ramen with pork cutlets",
    price: "£18.00",
  },
  {
    id: Math.random().toString(),
    name: "Salad",
    description: "Fresh gem lettuce with seasonal veg and garlic chicken",
    price: "£10.00",
  },
];

let MenuItemsInCart = [
  {
    key: Math.random().toString(),
    name: "Burger",
    description: 'Test',
    price: "£12.00",
    amount: 2
  }
];

const handleForwardedNewMenuItems = (items) => {
  MenuItemsInCart = [items, ...MenuItemsInCart];
  console.log(MenuItemsInCart);
};

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Body>
        <Banner />
        <Menu
          items={MenuItems}
          forwardedNewMenuItems={handleForwardedNewMenuItems}
        />
        <Cart cartItems={MenuItemsInCart}/>
      </Body >
    </Fragment>
  );
}

export default App;
