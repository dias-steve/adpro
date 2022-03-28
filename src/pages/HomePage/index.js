import React from 'react';
import CategoriesList from '../../components/CategoriesList';
import './styles.scss';

const HomePage = props => {
    return (
        <div className="HomePage">
            <h1>HomePage !</h1>
            <CategoriesList />
        </div>
    );
};

export default HomePage;