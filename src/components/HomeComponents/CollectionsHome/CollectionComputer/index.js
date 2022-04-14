import React from 'react'
import './styles.scss'
import closeIcon from './../../../../assets/croix-blanc.svg'
const CollectionComputer = ({collectionData}) => {
  const {image_1_accueil,image_2_accueil, titre_accueil, mobile} = collectionData
  const divRightStyle = {
    background:`url(${image_1_accueil})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  return (
    <section className='computer-collection'>
    <div className='container-left'>
      
    </div>
    <div className='container-right' style={divRightStyle}>
      <img src={closeIcon}/>
      
    </div>
    
    </section>
  )
}
const Photoframe = ({image}) => {
  
  const divStyle = {
   background:`url(${image})`,
   backgroundSize: 'cover'
  };
  return (
    <div style={divStyle} className='photoframe'>
        <img src={closeIcon}/>

    </div>
  )
}
export default CollectionComputer;