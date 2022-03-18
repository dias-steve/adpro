import React from 'react';
import './styles.scss';
import { useParams } from "react-router-dom";
import ProductsList from '../../components/ProductsList';

const CollectionPage = props => {
    const {idcollection} = useParams();
       // console.log(process.env.REACT_APP_WOO_PUBLIC_API);


    
    return (
        <div className="CollectionPage">
            <h1>CollectionPage ! id collection: {idcollection}</h1>
            <ProductsList />
        </div>

    );
};

export default CollectionPage;