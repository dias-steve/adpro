import React from 'react'
import './styles.scss'
import closeIcon from './../../../../assets/croix-blanc.svg';
import Mobile from '../../../mobile';
import Photoframe from '../../../Photoframe';
const CollectionComputer = ({collectionData}) => {
  const {image_1_accueil,image_2_accueil,image_3_accueil, titre_accueil, mobile} = collectionData
  const divRightStyle = {
    background:`url(${image_1_accueil})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  return (
    <section className='computer-collection'>
    <div className='container-left'>
      <div className='wrapper-photoframe photoframe1'>
        <Photoframe image={image_2_accueil}/>
      </div>
      <div className='wrapper-photoframe photoframe2'>
        <Photoframe image={image_2_accueil}/>
      </div>
      <div className='wrapper-photoframe photoframe3'>
        <Photoframe image={image_3_accueil}/>
      </div>
      
    </div>
    <div className='container-right' style={divRightStyle}>
      <img src={closeIcon}/>
      
    </div>
    <Mobile mobileData= {mobile}/>
    
    </section>
  )
}

export default CollectionComputer;