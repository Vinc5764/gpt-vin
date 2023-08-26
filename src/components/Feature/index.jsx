import React from 'react'
import './feature.css'

const Feature = ({title,text}) => {
  return (
    <div className='tea'>
      <div className='teat'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className='orange'>
        {text}
      </div>
    </div>
  )
}

export default Feature