import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header' 
import Cards from './components/Cards/Cards'

function App() {
  const [Carts, setCarts] = useState([])

  return (
    <>
      <Header></Header>
      <Cards></Cards>
     
    </>
  )
}

export default App
