import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { Container } from "react-bootstrap";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
const App = () => {
  return (
    <>
    <Router>
      <Header></Header>
      <main className="py-3">
        {/* container makes the element in the middle */}
        <Container>
        <Routes>
          <Route path='/'  element={<HomeScreen></HomeScreen>}></Route>
          <Route path='/product/:id' element={<ProductScreen></ProductScreen>}></Route>
          <Route path="/cart" element={<CartScreen></CartScreen>}></Route>
          <Route path="/cart/:id" element={<CartScreen></CartScreen>}></Route>
          <Route path="/cart/:id?" element={<CartScreen></CartScreen>}></Route>
        </Routes>
        </Container>
      </main>
      <Footer></Footer>
      </Router>
    </>
  );
};

export default App;
