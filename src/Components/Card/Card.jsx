import "./Card.scss"
import { useState } from 'react';

export default function Card({context,cost,confCost,img,editAllProductsCount,delCards,id,editAllCost}) {
 const [num,setNum] = useState(0)

 function editCount( amper) {
    if (String(amper) === "-1" && num === 0) {
        delCards(id)
        return
    }
    const result = num + amper
    editAllProductsCount(amper)
    setNum(result)
    editAllCost(confCost, amper)
    console.log(confCost,amper);
 }
  
 return <div className="container_card">
    <div className="wr-img">
        <img src={img} alt="" />
    </div>
    <div className="wr-content">
        <div className="title">
            <h4>{context}</h4>
        </div>
        <div className="info_func">
            <div className="price">{cost}</div>
        </div>
    </div>
    <div className="wr_button">
        <button onClick={()=>editCount(-1)}>-</button>
        <span>{num}</span>
        <button onClick={()=>editCount(+1)}>+</button>
    </div>
  </div>
}
