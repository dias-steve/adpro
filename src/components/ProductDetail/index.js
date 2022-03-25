import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { fetchProductStart, setProduct } from "../../redux/Products/products.actions";
import { handleFetchProduct } from '../../redux/Products/products.helpers';
import "./styles.scss";

const mapState = ({ productsData }) => ({
    product: productsData.product
  });

  
const ProductDetail = ({}) => {

    const dispatch = useDispatch();

    const { idproduct } = useParams();

    const [product, setProduct] = useState(null);
    
    useEffect(()=>{
        const fetchData = async () => {
            let response = null
            try{
                response = await handleFetchProduct(idproduct);
            }catch(err){
                console.log(err)
            }
            setProduct(response);
          };
        try{
            fetchData();
        }catch(err){
            console.log(err)
        }
    },[idproduct]);

    if(product){
        const { id, name, price, images} = product
        
        return(<div className='product-detail'>
        {images.map((image) => {return <img src={image.src}/>})}
        <h1>Product detail de id {id}</h1>
        <p>nom du produit {name}</p>
        <p>Prix {price}</p>

       
        

    </div>)
    }else{
        return (<div className='product-detail'>
            loading...
        </div>

        )
    }
  
}

export default ProductDetail;