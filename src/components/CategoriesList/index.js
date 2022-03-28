import React from 'react';
import {useQuery} from "react-query";
import { handleFetchAllCategories } from '../../api/categories.helpers';
import { Link } from 'react-router-dom';
import "./styles.scss";

const CategoriesList = () => {

    const { isLoading, isFetching, error, data, status } = useQuery(
        "categories",
        handleFetchAllCategories
      );
    
    if(data){
        console.log(data)
    }
    return (<div className='CategoriesList'>
        <h1>CategorieList</h1>
        {isLoading && <p>loading...</p>}
        {error && <p>error.message</p>}
        {data && <ul> 
            {data.map(categorie => 
            <li key={categorie.id}> 
                <Link to={`/categorie/${categorie.id}/${categorie.name}`} >{categorie.name}</Link>
            </li>
        )}
        </ul>
        }
        

    </div>)
}

export default CategoriesList;