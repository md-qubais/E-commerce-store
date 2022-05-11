import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { Container } from "react-bootstrap";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import ProductScreen from "./screens/ProductScreen";
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
        </Routes>
        </Container>
      </main>
      <Footer></Footer>
      </Router>
    </>
  );
};

export default App;
