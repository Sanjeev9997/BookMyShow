import React from 'react'
import Home from './Pages/Home'
import BsState from './Context/BsState'

export default function App() {
  return (
    <div>
      <BsState>
        <Home/>
      </BsState>
     
    </div>
  )
}
