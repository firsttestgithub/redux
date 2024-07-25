import React from 'react'
import Carloan from './Carloan'
import carBg from './assets/carbg.jpg'


const App = () => {
  return (
    <>
    <div className='w-full h-screen'>
    <img src={carBg} alt="" className='object-cover w-full h-full'/>
         <Carloan />
   </div>
    </>
  )
}

export default App
