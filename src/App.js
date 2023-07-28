import Header from "./components/Header/Header";
import Body from "./components/Wrapper/Body";
import Banner from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Modal/Cart";
import React, { useState, useEffect } from "react";
import CartProvider from "./store/CartProvider";
import useHttp from "./components/hooks/use_http";

function App() {
  const [isCartDisplaying, setIsCartDisplaying] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

  const { sendRequest } = useHttp();

  const applyData = (data) => {
    const fetchedMenuItems = [];

    for (const item in data) {
      fetchedMenuItems.push({
        id: item,
        key: item,
        name: data[item].name,
        description: data[item].description,
        price: data[item].price,
      });
    }
    setMenuItems(fetchedMenuItems);
  };

  useEffect(() => {
    sendRequest(
      {
        url: "https://custom-hooks-react-http-default-rtdb.europe-west1.firebasedatabase.app/meals.json",
      },
      applyData
    );
  }, [sendRequest]); // we have to add sendRequest as a dependency to useEffect because sendRequest was defined outside of the useEffect and therefore could change. SO we add useCallback to sendRequest method inside custom hook

  let CartDisplayArea;

  const handleIsCartDisplaying = (isDisplaying) => {
    setIsCartDisplaying(isDisplaying);
  };

  const handleCartChangeDisplay = () => {
    setIsCartDisplaying(false);
  };

  if (isCartDisplaying) {
    CartDisplayArea = <Cart onChangeCartDisplay={handleCartChangeDisplay} />;
  }

  return (
    <CartProvider>
      <Header forwardedIsCartDisplaying={handleIsCartDisplaying}></Header>
      <Body>
        <Banner />
        <Menu items={menuItems} />
        {CartDisplayArea}
      </Body>
    </CartProvider>
  );
}

export default App;
