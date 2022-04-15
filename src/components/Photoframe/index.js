import React from 'react';
import './styles.scss'
import closeIcon from './../../assets/croix-blanc.svg'
const Photoframe = ({image}) => {
  
    const divStyle = {
     background:`url(${image})`,
     backgroundSize: 'cover'
    };
    return (
    <div className='photoframe'>
      <div style={divStyle} className='photo'>
          <img src={closeIcon}/>
  
      </div>
    </div>
    )
  }

export default Photoframe;