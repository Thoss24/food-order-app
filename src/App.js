import Header from "./components/Header/Header";
import { Fragment } from 'react';
import Body from "./components/UI/Wrapper/Body";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <Fragment>
    <Header></Header>
    <Body>
      <Banner />
    </Body>
    </Fragment>
  )
}

export default App;
