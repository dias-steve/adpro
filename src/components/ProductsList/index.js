import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { fetchProductsStart, setProducts } from "../../redux/Products/products.actions";
import "./styles.scss";
import { handleFetchProducts } from '../../redux/Products/products.helpers';

const mapState = ({ productsData }) => ({
  products: productsData.products,
});
const ProductsList = ({}) => {
 
  const dispatch = useDispatch();
  const [products, setProducts] = useState(null);
  const { idcollection } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      let response = null
      try{
          response = await handleFetchProducts();
      }catch(err){
          console.log(err)
      }
      setProducts(response);
    };
  try{
      fetchData();
  }catch(err){
      console.log(err)
  }
  },[]);

  if (products){ 
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
  }else{
    return (<div className="ProductList"> loading </div>)
  }

};

export default ProductsList;
