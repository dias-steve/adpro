import React from "react";
import { Routes, Route } from "react-router-dom";

//Pages
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";

import "./default.scss";
function App() {
  return (
    <div className="App">
      <Routes>
        {/* Routes go here */}
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/collection/:idcollection" element={<CollectionPage />} />
        <Route exact path="/product/:idproduct" element={<ProductPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
