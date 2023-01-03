import React from 'react'
import Card from 'react-bootstrap/Card'
import { GiPayMoney } from "react-icons/gi";
import './Notification.css'
function Notification({prop}) {
    let data;
    

    switch(prop.type){
        case "buy":
            data = {
                title: "BUY",
                body: "Buying "
            };
            break;
        case "sell":
            data = {
                title: "SELL",
                body: "Selling "
            };
            break;
    }
  return (
    <div className='notification'>
        <GiPayMoney size={70} /> 
        
        <Card border="dark">
        <Card.Header>{data.title}</Card.Header>
        <Card.Body>
          <Card.Title>{prop.stock_name}</Card.Title>
          <Card.Text>
           {data.body} price per action is {prop.price}
          </Card.Text>
        </Card.Body>
        </Card>
        
    </div>
  )
}

export default Notification;