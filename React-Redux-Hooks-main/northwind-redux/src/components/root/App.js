//state : bir component in datası
import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import CartDetail from "../cart/CartDetail";
import NotFound from "../common/NotFound";
import Navi from "../navi/Navi";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import DashBoard from "./DashBoard";

<script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.js"></script>;

function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="/" exact component={DashBoard}/>
        <Route path="/product" component={DashBoard}/>
        <Route path="/saveproduct/:productId" component={AddOrUpdateProduct}/>
        <Route path="/saveproduct" component={AddOrUpdateProduct}/>
        <Route path="/cart" component={CartDetail}/>
        <Route component={NotFound} />
      </Switch>
    </Container>
  );
}

export default App;
