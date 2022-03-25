import React from "react";
import "./styles.scss";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail";


const ProductPage = (props) => {
  const { idproduct } = useParams();
  return (
    <div className="ProductPage">
      <h1>ProductPage ! {idproduct}</h1>
      < ProductDetail />
    </div>
  );
};

export default ProductPage;
