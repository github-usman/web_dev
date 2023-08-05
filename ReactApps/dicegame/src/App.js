import React from 'react'
import Body from './component/File/Body'
import Navbar from './component/File/Navbar'
import Footer from './component/File/Footer'

export default function App() {
  return (
    <div >
      <Navbar/>
      <div className="contatiner" >
      <Body/>
      </div>
      <div>
        <Footer/>
      </div>
     
    </div>
  )
}
