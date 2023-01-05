import React from 'react'

import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import './Notification.css'
import Button from 'react-bootstrap/Button';

function Notification({prop}) {
    let data;
    

    switch(prop.type){
        case "buy":
            data = {
                title: "BUY",
                body: "Buying ",
                icon: ( <GiPayMoney size={70} color="801C1C"/> )
            };
            break;
        case "sell":
            data = {
                title: "SELL",
                body: "Selling ",
                icon: ( <GiReceiveMoney size={70} color="1C8028"/> )
            };
            break;
    }
  return (
    
    <div className='notification'>
      <div className='icon'> {data.icon}</div>

      <div className='actiontext black'>
        {data.title}
      </div>
      <div className='actiontext gray'>
        {prop.stock_name}
      </div>
      <div className='desc'>
      {data.body} price per action is {prop.price} €
      </div>
         
       
        <div className="button">
        <Button variant="outline-primary">{data.title}</Button>{' '}
         <Button variant="outline-secondary">Ignore</Button>{' '}
        </div>
    
        
    </div>
  )
}

export default Notification;