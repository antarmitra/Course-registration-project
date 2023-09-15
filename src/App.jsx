import './App.css'
import Header from './components/Header/Header'
import Cards from './components/Cards/Cards';
import Carts from './components/Carts/Carts';
import { useState } from 'react';



function App() {

  const [addCart, setAddCart] = useState([]);

  const handleAddToCarts = (card) =>{
    setAddCart([...addCart, card]);
  };
  // console.log(setAddCart);






return (
  <>
    <Header></Header>
   <div className='lg:flex'>
   <Cards handleAddToCarts={handleAddToCarts}></Cards>
   <Carts addCart = {addCart}></Carts>
   </div>
    {/* <Carts></Carts> */}
    {/* <main>
      <cards handleAddToCarts = {handleAddToCarts}></cards>
      <Carts carts={carts} totalCreditHour = {totalCreditHour} remain = {remain} totalPrice={totalPrice}></Carts>
    </main> */}
  </>
)
}

export default App
