import React from 'react';
import './styles.scss';
import { useParams } from "react-router-dom";

const CollectionPage = props => {
    const {idcollection} = useParams();
    return (
        <div className="CollectionPage">
            <h1>CollectionPage ! id collection: {idcollection}</h1>
        </div>

    );
};

export default CollectionPage;