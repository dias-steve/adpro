import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { handleFetchProduct } from "../../api/products.helpers";
import {useQuery} from "react-query";
import "./styles.scss";
import { addProduct } from "../../redux/Cart/cart.actions";

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

  const handleAddtoCartBtn = (product) => {
    if (!product) return;
    dispatch(
      addProduct(product)
    );
  }

  
  if (data) {
    console.log(data);
    const { id, name, price, images } = data;
    const product = {
      productId: id,
      name,
      price,
      quantity:1
    }
    return (
      <div className="product-detail">
        {images.map((image) => {
          return <img src={image.src} key={image.id} />;
        })}
        <h1>Product detail de id {id}</h1>
        <p>nom du produit {name}</p>
        <p>Prix {price}</p>
        <button className="btn" onClick={() => handleAddtoCartBtn(product)}>
          Add to Cart
        </button>
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
