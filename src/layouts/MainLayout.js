import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
const MainLayout = props => {
    return (
        <div className='mainlayout'>
            < Header {...props}/>
            <h1>Nav</h1>
            <div className="main">
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default MainLayout;