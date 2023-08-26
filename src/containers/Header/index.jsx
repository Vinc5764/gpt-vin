import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const index = () => {
  return (
    <div className='two five' id='home'>
      <div className='one'>
          <h1 className= 'six'>Let's Build Something amazing with GPT-3 OpenAI</h1>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

        <div className='three'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>

        <div className='four'>
          <img src ={people} alt='people' />
          <p>1,600 people requested access a visit a last 24 hours</p>
        </div>
      </div>
        <div className='seven'>
          <img src={ai} alt='ai' />
        </div>
    </div>
  )
}

export default index 