import Header from "./components/Header/Header";
import { Fragment } from "react";
import Body from "./components/Wrapper/Body";
import Banner from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Modal/Cart";
import React, { useState } from "react";
import CartProvider from "./store/CartProvider";

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

function App() {
  const [isCartDisplaying, setIsCartDisplaying] = useState(false);

  let CartDisplayArea;

  const handleIsCartDisplaying = (isDisplaying) => {
    setIsCartDisplaying(isDisplaying);
    console.log(isCartDisplaying);
  };

  const handleCartChangeDisplay = () => {
    setIsCartDisplaying(false);
  };

  if (isCartDisplaying) {
    CartDisplayArea = (
      <Cart
        onChangeCartDisplay={handleCartChangeDisplay}
      />
    );
  }

  return (
    <CartProvider>
      <Header
        forwardedIsCartDisplaying={handleIsCartDisplaying}
      ></Header>
      <Body>
        <Banner />
        <Menu
          items={MenuItems}
        />
        {CartDisplayArea}
      </Body>
    </CartProvider>
  );
}

export default App;
