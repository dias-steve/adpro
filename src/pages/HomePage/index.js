import React from 'react';
import CategoriesList from '../../components/CategoriesList';
import './styles.scss';
import {useQuery} from "react-query";
import { handleFetchHomeData } from '../../api/homedata.helpers';
const HomePage = props => {
    const { isLoading, isFetching, error, data, status } = useQuery(
        "homeData",
        handleFetchHomeData
      );
    
    if(data){
        console.log(data)
    }
    return (<div className='HomePage'>
    
        {isLoading && <p>loading...</p>}
        {error && <p>error.message</p>}
        {data && <div> 
            
            
            <img src={data.image_accueil}/>
        </div>
        }
        

    </div>)

    
};


export default HomePage;