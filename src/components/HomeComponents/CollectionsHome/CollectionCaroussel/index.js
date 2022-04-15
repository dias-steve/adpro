import React from 'react'
import './styles.scss'
import Mobile from './../../../mobile'

const CollectionCaroussel = ({collectionData}) => {
  const {image_1_accueil,image_2_accueil,image_3_accueil, titre_accueil, mobile} = collectionData;

 
  return (
    <section className='collection-caroussel'>
 <img className='image-over' src= {image_3_accueil}/>
    <div className='caroussel-wrapper'>
      <div className='caroussel-image image-1' style= {{backgroundImage:`url(${image_1_accueil})`}} ></div>
      <div className='caroussel-image image-2' style= {{backgroundImage:`url(${image_2_accueil})`}}></div>
    </div>
   <Mobile mobileData={mobile}/>
    
    </section>
  )
}

export default CollectionCaroussel;