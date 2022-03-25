import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { fetchProductStart, setProduct } from "../../redux/Products/products.actions";
import "./styles.scss";

const mapState = ({ productsData }) => ({
    product: productsData.product
  });

  
const ProductDetail = ({}) => {

    const dispatch = useDispatch();
    const { product } = useSelector(mapState);
    const { idproduct } = useParams();

    const { id, name, price, images} = product
    const productThumbnail = images
    
    useEffect(()=>{
        dispatch(
           fetchProductStart(idproduct)
        )
        
 
    },[]);
    return(<div className='product-detail'>
        {productThumbnail.map((image) => {return <img src={image.src}/>})}
        <h1>Product detail de id {id}</h1>
        <p>nom du produit {name}</p>
        <p>Prix {price}</p>
        

    </div>)
}

export default ProductDetail;