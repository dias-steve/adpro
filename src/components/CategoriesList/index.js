import React from 'react';
import {useQuery} from "react-query";
import { handleFetchAllCategories } from '../../api/categories.helpers';
import { Link } from 'react-router-dom';
import "./styles.scss";
import { handleFetchHomeData } from '../../api/homedata.helpers';

const CategoriesList = () => {

    const { isLoading, isFetching, error, data, status } = useQuery(
        "categories",
        handleFetchHomeData
      );
    
    if(data){
        console.log(data)
    }
    return (<div className='CategoriesList'>
        <h1>CategorieList</h1>
        {isLoading && <p>loading...</p>}
        {error && <p>error.message</p>}
        {data && <div> 
            
            <h1>data here</h1>
        </div>
        }
        

    </div>)
}

export default CategoriesList;