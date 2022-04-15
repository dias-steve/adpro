import React from 'react'
import './styles.scss'

const Interlude = ({text}) => {
  return (
    <section className='interlude'>
      <div className='text-wrapper'>
        <h2 className='interlude-text'>{text}</h2>
        <h2 className='interlude-text small'>{text} - {text} - {text} - {text} - {text} - {text}</h2>
        <h2 className='interlude-text'>{text}</h2>
      </div>
    </section>
  )
}

export default Interlude;