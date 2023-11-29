import React from 'react'
import "./ForMenuBurgers.scss"

export default function ForMenuBurgers({img,cost,context,weight,id}) {
  return (
    <div className="menu_burger_container">
        <img src={img} alt="" />
        <div className="description">
            <h3>{cost}₽</h3>
            <h4>{context}</h4>
        </div>
        <div className="description add">
            <p>{weight}</p>
            <button>Добавить</button>
        </div>
    </div>
  )
}
