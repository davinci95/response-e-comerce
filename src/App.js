import React from "react";
import Nav from "./component/Nav";
import Hero from "./component/Hero";
import Products from "./component/Products";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Products />
      <Footer />
    </div>
  );
};

export default App;
