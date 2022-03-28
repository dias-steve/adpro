import React from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider }  from "react-query"
import { ReactQueryDevtools } from "react-query/devtools";
//Pages
import HomePage from "./pages/HomePage";
import CategoriePage from "./pages/CategoriePage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";

import "./default.scss";

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        
        <Routes>
          {/* Routes go here */}
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/categorie/:idcategory/:namecategory" element={<CategoriePage />} />
          <Route exact path="/product/:idproduct" element={<ProductPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
        </Routes>
        {/* <ReactQueryDevtools initialIsOpen /> */}
      </div>
    </QueryClientProvider>
  );
}

export default App;
