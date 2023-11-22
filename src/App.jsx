import { useState } from 'react'
import './App.css'
import ArrCards from "./FoodBurgers.json"
import Card from './Components/Card/Card'

function App() {
  
  const [Burgers,setBurgers] = useState(ArrCards)

  
  const [allCost,setAllCost] = useState(0)
  
  function editAllCost(confCost , amper) {
    if (String(amper) === "-1") {
      setAllCost(Number(allCost) - Number(confCost))
  }else{
    setAllCost(Number(allCost) + Number(confCost))
  }
  }

  const [allProductsCount,setAllProductsCount] = useState(0)

 function editAllProductsCount(amper) {
    setAllProductsCount(allProductsCount + amper)
 }

 function delCards(id) {
  const copyBurgersArr = [...Burgers]
  const newBurgersArr = copyBurgersArr.filter(item => item.id != id)
  setBurgers(newBurgersArr)
 }

  if (!Burgers) {
    return <h1>Error404</h1>
  }

  return (
    <div className="container">
      <h1>Корзина:{allProductsCount}</h1>
   <div className="wrapper-gl_cards">
   {Burgers.map(item => (<Card {...item} key={item.id} editAllProductsCount={editAllProductsCount} delCards={delCards} editAllCost={editAllCost} setAllCost={setAllCost}/>))}
   <h1>Ценоимость: {allCost}</h1>
   </div>

      
    </div>
  )
}

export default App
