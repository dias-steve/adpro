import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { fetchProductsStart, setProducts } from "../../redux/Products/products.actions";
import "./styles.scss";

const mapState = ({ productsData }) => ({
  products: productsData.products,
});
const ProductsList = ({}) => {
 
  const dispatch = useDispatch();
  const { products } = useSelector(mapState);

  useEffect(() => {
      dispatch(
          fetchProductsStart()
      )
      return (
        dispatch(
          setProducts([])
        )
      )
  },[]);

  return (
    <div className="ProductList">
      <p> Liste des produits</p>
      <ul>
        {products.map((produit,pos)=>{
            return( 
              <li>
                <Link to ={`/product/${produit.id}`}>
                  <a> produit{produit.id} - {produit.name}  </a>
                </Link>
              </li>
            )
        })}
      </ul>
    </div>
  );
};

export default ProductsList;
