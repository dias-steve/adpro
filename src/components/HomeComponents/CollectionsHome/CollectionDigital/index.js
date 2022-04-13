import React from 'react'
import './styles.scss'


const CollectionDigital = ({collectionData}) => {
  const hStyle = {
        background:`url(${collectionData.image_1_accueil})`,
        backgroundSize: 'cover',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
  };
  return (
    <section className='digital-collection'>

      <div className='wrapper'>
        <h1 style={hStyle}> {collectionData.titre_accueil}</h1>
      </div>
    </section>
  )
}

export default CollectionDigital;