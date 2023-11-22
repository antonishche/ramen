import "./Card.scss"
import { useState } from 'react';
import del from "../../images/close.png"

export default function Card({context,weight,cost,classX,confCost,img,editAllProductsCount,delCards,id}) {
 const [num,setNum] = useState(0)

 function editCount(amper) {
    if (String(amper) === "-1" && num === 0) {
        return
    }
    const result = num + amper
    editAllProductsCount(amper)
    setNum(result)
 }
 
 return <div className="container_card">
    <div className="wr-img">
        <img src={img} alt="" />
    </div>
    <div className="wr-content">
        <div className="title">
            <h3>{context}</h3>
        </div>
        <div className="info_func">
            <div className="price">{cost}</div>
            <div className="wr_button">
                <button onClick={()=>editCount(-1)}>-</button>
                <span>{num}</span>
                <button onClick={()=>editCount(+1)}>+</button>
            </div>
        </div>
    </div>
        <div className="basket" onClick={()=>{delCards(id)}}>
            <img src={del} alt="" />
        </div>
  </div>
}
