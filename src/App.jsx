import {Routes, Route} from 'react-router-dom'
import {Brand, CTA,Navbar} from './components'
import {Footer, Blog, Possibility, Features,Header, Whatgp3} from './containers'
import './App.css'


import React from 'react'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgp3 />
    </div>
  )
}

export default App