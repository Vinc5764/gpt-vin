import React from 'react'
import {Feature} from '../../components'
import './whatGPT3.css'

const index = () => {
  return (
    <div className='pencil biscuit' id='whatgp3'>
      <div className='pencil__container'>
          <Feature  title='What is GPT-3' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.' />
      </div>
      <div className='bucket'>
        <h1 className='six'>The possibilities are beyond your imagination</h1>
        <p>Explore the library</p>
      </div>
      <div className='bucket__container'>
        <Feature  title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."/>
        <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
        <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      </div>
    </div>
  )
}

export default index
