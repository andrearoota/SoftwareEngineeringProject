import React from 'react';
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import classes from'./Notification.module.css'
import Button from 'react-bootstrap/Button';

class Notification extends React.Component {
  render() {
    let data;
    switch(this.props.item.type){
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
      
      <div className={classes.notification}>
        <div className={classes.icon}> {data.icon}</div>

        <div className={classes.actiontextblack}>
          {data.title}
        </div>
        <div className={classes.actiontextgray}>
          {this.props.item.stock_name}
        </div>
        <div className={classes.desc}>
        {data.body} price per action is {this.props.item.price} €
        </div>
          
        
          <div className={classes.button}>
          <Button variant="outline-primary">{data.title}</Button>{' '}
          <Button variant="outline-secondary">Ignore</Button>{' '}
          </div>
      
          
      </div>
    );
  }
}

export default Notification;