import './App.css'
import Header from './components/Header/Header'
import Cards from './components/Cards/Cards';
import Carts from './components/Carts/Carts';



function App() {




 




return (
  <>
    <Header></Header>
   <div className='flex'>
   <Cards></Cards>
   <Carts></Carts>
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
