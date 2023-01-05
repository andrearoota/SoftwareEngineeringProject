import React from 'react'
import Card from 'react-bootstrap/Card'
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
        {data.icon} 
        <Card border="dark">
        <Card.Header>{data.title}</Card.Header>
        <Card.Body>
          <Card.Title>{prop.stock_name}</Card.Title>
          <Card.Text>
           {data.body} price per action is {prop.price}
          </Card.Text>
        </Card.Body>
        </Card>
        <div className="button">
        <Button variant="outline-primary">{data.title}</Button>{' '}
         <Button variant="outline-secondary">Ignore</Button>{' '}
        </div>
    
        
    </div>
  )
}

export default Notification;