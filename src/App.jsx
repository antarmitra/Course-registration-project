/* eslint-disable no-undef */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import Header from './components/Header/Header'
import Cards from './components/Cards/Cards';
import Carts from './components/Carts/Carts';
import { useState } from 'react';

function App() {

  const [addCart, setAddCart] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0)
  const [remaining, setRemaining] = useState(20)

  const handleAddToCarts = (card) => {
    const isExist = addCart.find((title) => title.id == card.id);

    let count = card.price;
    let creditCount = card.credit;


    if (isExist) {
      return toast('You have already added the course name to the card')
    }

    else {
      // price option
      addCart.forEach((title) => {
        count += title.price;
        creditCount += title.credit
      });
      const totalCount = count;

      const totalCredit = creditCount;


      // remaining option
      const totalRemaining = 20 - totalCredit;
      if (totalCredit > 20) {
        toast('your time is up,  and your cant add more than 20 credit')
      }
      else {
        setRemaining(totalRemaining);
        setAddCart([...addCart, card]);
        setTotalCredit(totalCredit)
        setTotalCount(totalCount);
      }
    }
  };

  return (
    <>
      <Header></Header>
      <div className='lg:flex'>
        <Cards handleAddToCarts={handleAddToCarts} ></Cards>
        <Carts addCart={addCart} totalCount={totalCount} totalCredit={totalCredit} remaining={remaining}></Carts>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
