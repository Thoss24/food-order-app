import Header from "./components/Header/Header";
import Body from "./components/Wrapper/Body";
import Banner from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Modal/Cart";
import React, { useState, useEffect } from "react";
import CartProvider from "./store/CartProvider";
import useHttp from "./components/hooks/use_http";
import OrderConfirmed from "./components/Modal/OrderConfirmed";

function App() {
  const [isCartDisplaying, setIsCartDisplaying] = useState(false);
  const [isOrdered, setIsOrdered] = useState(false);
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

  let OrderConfirmedDisplayArea;

  const handleIsCartDisplaying = (isDisplaying) => {
    setIsCartDisplaying(isDisplaying);
  };

  const handleCartChangeDisplay = () => {
    setIsCartDisplaying(false);
  };

  const orderConfirmedDisplaying = () => {
    setIsOrdered(true)
    setIsCartDisplaying(false)
  };

  const orderConfirmedNotDisplaying = () => {
    setIsOrdered(false)
  };

  if (isCartDisplaying) {
    CartDisplayArea = <Cart onChangeCartDisplay={handleCartChangeDisplay} orderIsDisplaying={orderConfirmedDisplaying}/>;
  };

  if (isOrdered) {
    OrderConfirmedDisplayArea = <OrderConfirmed orderNotDisplaying={orderConfirmedNotDisplaying}/>
  }

  return (
    <CartProvider>
      <Header forwardedIsCartDisplaying={handleIsCartDisplaying}></Header>
      <Body>
        <Banner />
        <Menu items={menuItems} />
        {CartDisplayArea}
        {OrderConfirmedDisplayArea}
      </Body>
    </CartProvider>
  );
}

export default App;
