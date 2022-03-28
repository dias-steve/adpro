import React from 'react';
import './styles.scss';
import { useParams } from "react-router-dom";
import ProductsList from '../../components/ProductsList';
import { useLocation } from "react-router-dom"

const CategoriePage = props => {
    const {idcategory, namecategory} = useParams();
       // console.log(process.env.REACT_APP_WOO_PUBLIC_API);
   console.log(useParams());
    
   

    
    return (
        <div className="CollectionPage">
            <h1>CollectionPage ! id collection: {idcategory} {namecategory}</h1>
            <ProductsList />
        </div>

    );
};

export default CategoriePage;