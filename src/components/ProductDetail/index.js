import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { handleFetchProduct } from "../../api/products.helpers";
import {useQuery} from "react-query";
import "./styles.scss";

const mapState = ({ productsData }) => ({
  product: productsData.product,
});

const ProductDetail = ({}) => {
  const dispatch = useDispatch();

  const { idproduct } = useParams();

  //fetching data 
  const { isLoading, isFetching, error, data, status } = useQuery(
    ["product", idproduct],
    () => handleFetchProduct(idproduct)
  );

  
  if (data) {
    console.log(data);
    const { id, name, price, images } = data;

    return (
      <div className="product-detail">
        {images.map((image) => {
          return <img src={image.src} key={image.id} />;
        })}
        <h1>Product detail de id {id}</h1>
        <p>nom du produit {name}</p>
        <p>Prix {price}</p>
      </div>
    );
  } else {
    return (
      <div className="product-detail">
        {isFetching && "Background Updating"}
        {isLoading && "Loading..."}
        {error && error.message}
      </div>
    );
  }
};

export default ProductDetail;
