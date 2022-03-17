import React from "react";
import "./styles.scss";
import { useParams } from "react-router-dom";

const ProductPage = (props) => {
  const { idproduct } = useParams();
  return (
    <div className="ProductPage">
      <h1>ProductPage ! {idproduct}</h1>
    </div>
  );
};

export default ProductPage;
