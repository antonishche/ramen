import { useState } from 'react'
import './App.scss'

import ArrCards from "./FoodBurgers.json"
import ArrBurgersMenu from "./BurgersMenu.json"

import Card from './Components/Card/Card'
import ForMenuBurgers from './Components/ForMenuBurgers/ForMenuBurgers'

function App() {

  const [Burgers, setBurgers] = useState(ArrCards)

  const [allCost, setAllCost] = useState(0)

  const [allProductsCount, setAllProductsCount] = useState(0)

  const [MenuBurger , setMenuBurger] = useState(ArrBurgersMenu)

  console.log(MenuBurger);

  function editAllCost(confCost, amper) {
    if (String(amper) === "-1") {
      setAllCost(Number(allCost) - Number(confCost))
    } else {
      setAllCost(Number(allCost) + Number(confCost))
    }
  }

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
    <div className="huge_container">
      <div className="mini_container">
        <h3>Корзина: {allProductsCount}</h3>
        <div className="wrapper-gl_cards">
          {Burgers.map(item => (<Card {...item} key={item.id} editAllProductsCount={editAllProductsCount} delCards={delCards} editAllCost={editAllCost} setAllCost={setAllCost} />))}
        </div>
        <p>Ценоимость: {allCost}₽</p>
        <button className='btn'>Оформить заказ</button>
        <div className="mini-footer">
          <img src="./moto.png" alt="" />
          <p>Бесплатная доставка</p>
        </div>
      </div>
      <div className="container_burgers_menu">
        {MenuBurger.map(item => (<ForMenuBurgers {...item} key={item.id} />))}
      </div>
    </div>
  )
}

export default App
