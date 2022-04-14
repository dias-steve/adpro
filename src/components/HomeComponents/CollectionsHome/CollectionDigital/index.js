import React from 'react';
import Mobile from '../../../mobile';
import './styles.scss'
import closeIcon from './../../../../assets/croix-blanc.svg'


const CollectionDigital = ({collectionData}) => {

  const {image_1_accueil,image_2_accueil, titre_accueil, mobile} = collectionData
  
  const hStyle = {
        background:`url(${image_1_accueil})`,
        backgroundSize: 'cover',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
  };
  return (
    <section className='digital-collection'>

      <div className='wrapper'>
        <h1 className='digital-collection-title'style={hStyle}> {titre_accueil}</h1>
      </div>
      <div className='photoframe-group'>
        <Photoframe image={image_2_accueil} />
        <Photoframe image={image_2_accueil} />
        <Photoframe image={image_2_accueil} />
      </div>
      <Mobile mobileData= {mobile}/>
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


export default CollectionDigital;