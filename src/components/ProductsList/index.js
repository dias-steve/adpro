import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "./styles.scss";
import { handleFetchProducts, handleFetchProductsbyCategory } from "../../api/products.helpers";
import { useQuery } from "react-query";
const mapState = ({ productsData }) => ({
  products: productsData.products,
});
const ProductsList = ({}) => {

  const { idcategory } = useParams();

  //fetching data
  const { isLoading, isFetching, error, data, status } = useQuery(
    ["products-category", idcategory ],
    () => handleFetchProductsbyCategory(idcategory)
  );

  if (data) {
    return (
      <div className="ProductList">
        <p> Liste des produits</p>
        <ul>
          {data.map((produit, pos) => {
            return (
              <li key={produit.id}>
                <Link to={`/product/${produit.id}`}>
                  produit{produit.id} - {produit.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="ProductList">
        {isFetching && "Background Updating"}
        {isLoading && "Loading..."}
        {error && error.message}{" "}
      </div>
    );
  }
};

export default ProductsList;
