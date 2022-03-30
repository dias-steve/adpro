import React from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider }  from "react-query"
import { ReactQueryDevtools } from "react-query/devtools";
//Pages
import HomePage from "./pages/HomePage";
import CategoriePage from "./pages/CategoriePage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import Cart from './pages/Cart';
import Checkout from "./pages/Checkout";

import "./default.scss";
import MainLayout from "./layouts/MainLayout";


const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <MainLayout>
        <Routes>
          {/* Routes go here */}
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/categorie/:idcategory/:namecategory" element={<CategoriePage />} />
          <Route exact path="/product/:idproduct" element={<ProductPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/checkout" element={<Checkout/>} />
        </Routes>
        {/* <ReactQueryDevtools initialIsOpen /> */}
        </MainLayout>
      </div>
    </QueryClientProvider>
  );
}

export default App;
